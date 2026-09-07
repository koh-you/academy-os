// 쎈 유형 카탈로그에 원천 데이터를 붙인 것.
//
// 왜 별도 모듈인가: 원천 데이터 api/data/ssenTypeIndex.json 이 284 KB 다. 예전에는
// App.jsx 가 이 JSON 을 정적 import 해서, 수업연구 화면(PlanningToolCenters)에서만
// 쓰는 데이터가 교사 첫 로딩 번들(main)에 통째로 들어갔다.
//
// 이 파일은 그 화면에서만 import 한다. 그래야 JSON 이 lazy 청크로 따라간다.
// App.jsx 나 main 경로에서 여기를 import 하면 다시 첫 로딩으로 끌려온다 —
// test:ssen-subject-parity 가 그걸 막는다.
//
// 변환 로직은 ssenTypeCatalogModel.js 에 있다(JSON 없이 테스트할 수 있게 분리).
import ssenTypeIndex from "../../../api/data/ssenTypeIndex.json";
import { buildSsenTypeCatalog } from "./ssenTypeCatalogModel.js";

export const ssenTypeCatalog = buildSsenTypeCatalog(ssenTypeIndex);
