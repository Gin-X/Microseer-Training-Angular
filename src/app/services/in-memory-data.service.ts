import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const treeData = [
      {
        id: '1', name: '公司名', isExpanded: false, children: [
          {id : "1-1", name: "1-1", isExpanded: false,  children: [
            {id : "1-1-1", name: "1-1-1"},
            {id : "1-1-2", name: "1-1-2"},
            {id : "1-1-3", name: "1-1-3"}
          ]},
          {id : "1-2", name: "1-2", isExpanded: false,  children: [
            {id : "1-2-1", name: "1-2-1"},
            {id : "1-2-2", name: "1-2-2"},
            {id : "1-2-3", name: "1-2-3"}
          ]},
          {id : "1-3", name: "1-3"}
        ]
      }
    ];

    return {treeData};
  }
}
