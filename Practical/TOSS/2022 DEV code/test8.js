function parse(route, path) {
  const returnObj = {
    matches: true,
    params: {},
  };

  const ROUTE_DEPTH = route.match(/\//g).filter((item) => item !== "").length;
  let PROCESSED_PATH = path;

  if (!PROCESSED_PATH.startsWith("/")) {
    PROCESSED_PATH = "/" + PROCESSED_PATH;
  }

  for (let i = 0; i < ROUTE_DEPTH; i++) {
    // route의 []값 판별, path의 number 판별
    if (
      route
        .slice(findSlashPoint(route)[i] + 1, findSlashPoint(route)[i + 1])
        .startsWith("[") &&
      route
        .slice(findSlashPoint(route)[i] + 1, findSlashPoint(route)[i + 1])
        .endsWith("]") &&
      !isNaN(
        Number(
          PROCESSED_PATH.slice(
            findSlashPoint(PROCESSED_PATH)[i] + 1,
            findSlashPoint(PROCESSED_PATH)[i + 1]
          )
        )
      )
    ) {
      // matches:true에서 리턴할 객체 리턴 준비
      const PARAMS_LENGTH = route.slice(
        findSlashPoint(route)[i] + 1,
        findSlashPoint(route)[i + 1]
      ).length;

      returnObj.params[
        route
          .slice(findSlashPoint(route)[i] + 1, findSlashPoint(route)[i + 1])
          .slice(1, PARAMS_LENGTH - 1)
      ] = PROCESSED_PATH.slice(
        findSlashPoint(PROCESSED_PATH)[i] + 1,
        findSlashPoint(PROCESSED_PATH)[i + 1]
      );

      continue;
    }

    // matches:false 걸러버리기
    if (
      route.slice(findSlashPoint(route)[i], findSlashPoint(route)[i + 1]) !==
      PROCESSED_PATH.slice(
        findSlashPoint(PROCESSED_PATH)[i],
        findSlashPoint(PROCESSED_PATH)[i + 1]
      )
    ) {
      return {
        matches: false,
      };
    }
  }

  return returnObj;
}

const findSlashPoint = (path) => {
  let pos = 0;
  let returnArr = [];

  while (true) {
    let foundPos = path.indexOf("/", pos);
    if (foundPos == -1) break;

    returnArr.push(foundPos);
    pos = foundPos + 1;
  }

  return returnArr;
};

function solution(route, path) {
  var result = parse(route, path);
  return JSON.stringify(result);
}

parse("/about", "about");
// {
//     'matches':true,
//     'params':{}
// }

parse("/service/[id]", "/service/1");
// {
//     'matches':true,
//     'params':{
//         'id':'1'
//     }
// }

parse("/service/[id]", "/services");
// {
//     'matches':false
// }

parse("/about", "/");
// {
//     'matches':false
// }

parse(
  "/service/[serviceId]/deployment/[deploymentId]",
  "/service/1/deployment/9"
);
// {
//     'matches':true,
//     'params':{
//         'serviceId':'1',
//         'deploymentId':'9'
//     },
// }
