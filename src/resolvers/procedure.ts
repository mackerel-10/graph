import Source from "./source";

const Procedure = {
  currentProcessGuid: (parent: SysmonEvent) => {
    return Source.parentProcessGuid(parent._source);
  },
  parentEventList: () => {},
};

export default Procedure;
