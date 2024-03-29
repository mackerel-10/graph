import Source from "./source";
import { searchEvent } from "../db/searchEvent";

const Procedure = {
  currentProcessGuid: (parent: SysmonEvent) => {
    return Source.parentProcessGuid(parent._source);
  },
  parentEventList: async (parent: SysmonEvent) => {
    // [SysmonEvent]: SysmonEvent 재귀적으로 찾아서 return 해줘야 함
    const parentProcessGuid = parent._source.ParentProcessGuid;

    const data = await searchEvent({ ProcessGuid: parentProcessGuid });
    return [...data];
  },
};

export default Procedure;
