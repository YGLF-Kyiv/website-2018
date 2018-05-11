import { DateTime } from 'luxon';

export function isInBrowser() {
  return typeof window !== 'undefined';
}

export function constructSchedule(schedule, speakers) {
  return schedule.map(day => {
    const events = day.events.map(event => {
      const speaker = speakers.find(el => el.id === event.speakerId);
      const speakerData = speaker
        ? {
          speakerName: speaker ? `${speaker.firstName} ${speaker.lastName}` : null,
          ...speaker,
        }
        : {};
      return {
        ...event,
        speakerData,
        anchor: (event.anchor || event.title)
          .replace(/\s/g, '-')
          .replace(/\&/g, 'and')
      };
    });
    return { ...day, events };
  });
}

const toMinutes = (h, m) => {
  return Number(h) * 60 + Number(m);
}

export function getCurrentEvents(SCHEDULE) {
  const today = DateTime.local().setZone('Europe/Kiev');
  console.log('today.hour', today.hour);
  const yearMonth = { year: 2018, month: 5 };
  const firstDay = DateTime.fromObject({ ...yearMonth, day: SCHEDULE[0].day}).toLocaleString();
  const secondDay = DateTime.fromObject({ ...yearMonth, day: SCHEDULE[1].day}).toLocaleString();
  const dayIndex = [firstDay, secondDay].indexOf(today.toLocaleString());

  return ~dayIndex
    ? getEventByCurrentTime(SCHEDULE[dayIndex].events)
    : null;
  // else { // TODO: what should be shown before and after May 24-25 and at night?
  //   return [SCHEDULE[0].events[0], SCHEDULE[0].events[15]];
  // }
}

/* For sticky footer */
export function getEventByCurrentTime(events) {
  const {hour, minute} = DateTime.local().setZone('Europe/Kiev');
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
      result = [event, nextEvent]
    }
  });

  return result;
}
