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

const toMinutes = (h, m) => {
  return Number(h) * 60 + Number(m);
}

export function getToday() {
  return DateTime.local().setZone('Europe/Kiev');
}

export function getCurrentEventId(schedule) {
  const currentEvents = getCurrentEvents(schedule);

  return currentEvents
    ? currentEvents[0].id
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
    let nextEventTime = Number(eventTime) + 60;

    if (nextEvent) {
      nextEventTime = toMinutes(nextEvent.time.hours, nextEvent.time.minutes);
    }

    if (currentTime >= eventTime
        && currentTime < nextEventTime) {
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
