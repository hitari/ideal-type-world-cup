const events = {};

const subscribe = (event, callback) => {
  if (!events.hasOwnProperty(event)) {
    events[event] = [];
  }

  return events[event].push(callback);
};

const publish = (event, data = {}) => {
  if (!events.hasOwnProperty(event)) {
    return [];
  }

  return events[event].map((callback) => callback(data));
};

export default { subscribe, publish };
