const EventHeader = {
  size: (parent: EventHeader) => {
    console.log(parent);
    return parent.Size;
  },
};

export default EventHeader;
