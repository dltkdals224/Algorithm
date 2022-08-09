function parse(route, path) {
  /* 작성해주세요 */

  return {
    matches: false,
  };
}

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
