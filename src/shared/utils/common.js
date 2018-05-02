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
        anchor: getAnchor(event, speakerName, index)
      };
    });
    return { ...day, events };
  });
}

function getAnchor(event, name, uniq) {
  if (event.anchor) return event.anchor;
  if (name) return `${encodeAndReplace(name)}-${event.title.split(/\b/)[0]}`
  return `${encodeAndReplace(event.title)}-${uniq}`
}

function encodeAndReplace(str) {
  return encodeURI(str.replace(/\s/g, '-'))
}
