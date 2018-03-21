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
        anchor: speaker
          ? `${speaker.anchor}-${day.day}-${event.time.hours}-${event.time.minutes}`
          : null
      };
    });
    return { ...day, events };
  });
}
