import { DateTime } from 'luxon';

export function isInBrowser() {
  return typeof window !== 'undefined';
}

export function constructSchedule(schedule, speakers) {
  return schedule.map(day => {
    const events = day.events.map((event, index) => {
      const speaker = speakers.find(el => el.id === event.speakerId);
      const speakerName = speaker ? `${speaker.firstName} ${speaker.lastName}` : null
      const speakerData = speaker
        ? {
          speakerName,
          ...speaker,
        }
        : {};
      return {
        ...event,
        speakerData,
        anchor: getAnchor(event, speakerName, event.id)
      };
    });
    return { ...day, events };
  });
}

export const toMinutes = (h, m) => {
  return Number(h) * 60 + Number(m);
}

export const toSeconds = (h, m, s = 0) => {
  return (Number(h) * 3600) + (Number(m) * 60) + Number(s);
}

export function getToday() {
  return DateTime.local().setZone('Europe/Kiev');
}

export function getActiveDay() {
  const today = getToday().day;
  return (today === 24 || today === 25) ? today : false;
}

export function isEventDay() {
  return Boolean(getActiveDay());
}

export function makeEventDayTimeline(schedule) {
  const today = getToday().day;
  return schedule
    .find(day => day.day === today)
    .events.map(({ time }) => toSeconds(time.hours, time.minutes))
    .concat(toSeconds(23, 59, 59) + 1); /* End of the day */
}

export function getCurrentMinutes() {
  const today = getToday();
  return toMinutes(today.hour, today.minute);
}

function getCurrentSeconds() {
  const { hour, minute, second } = getToday();
  return toSeconds(hour, minute, second);
}

export function nextUpdatesIn(schedule) {
  const timeline = makeEventDayTimeline(schedule);
  const now = getCurrentSeconds();

  return timeline
    .filter(time => time > now)
    .map(time => (time - now) * 1000);
}

export function getCurrentEvent(schedule) {
  const currentEvents = getCurrentEvents(schedule);

  return currentEvents
    ? currentEvents[0]
    : null
}

export function getNextEvent(schedule) {
  const currentEvents = getCurrentEvents(schedule);

  return currentEvents
    ? currentEvents[1]
    : null
}

export function getCurrentEvents(schedule) {
  const today = getToday();
  const yearMonth = { year: 2018, month: 5 };
  const firstDay = DateTime.fromObject({ ...yearMonth, day: schedule[0].day}).toLocaleString();
  const secondDay = DateTime.fromObject({ ...yearMonth, day: schedule[1].day}).toLocaleString();
  const dayIndex = [firstDay, secondDay].indexOf(today.toLocaleString());

  return ~dayIndex
    ? getEventByCurrentTime(schedule[dayIndex].events, today)
    : null;
}

/* For sticky footer */
export function getEventByCurrentTime(events, {hour, minute}) {
  const currentTime = toMinutes(hour, minute);
  let result = null;

  events.forEach((event, i) => {
    const eventTime = toMinutes(event.time.hours, event.time.minutes);
    const nextEvent = events[i + 1];
    let endEventTime;

    if (nextEvent) {
      endEventTime = toMinutes(nextEvent.time.hours, nextEvent.time.minutes);
    } else {
      endEventTime = 1440;
    }

    if (currentTime >= eventTime
        && currentTime < endEventTime) {
      result = [event, nextEvent].filter(Boolean)
    }
  });

  return result;
}

function getAnchor(event, name, uniq) {
  if (event.anchor) return `${event.anchor}-${uniq}`;
  if (name) return `${encodeAndReplace(name)}-${event.title.split(/\b/)[0]}-${uniq}`
  return `${encodeAndReplace(event.title)}-${uniq}`
}

function encodeAndReplace(str) {
  return encodeURI(str.replace(/\s/g, '-'))
}
