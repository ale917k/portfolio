import React from "react";

import SKILLS_TECH from "../js/SKILLS_TECH";

import SkillsSection from "../components/about/SkillsSection.component";
// import SkillsProgressSection from "../components/about/SkillsProgressSection.component";

import MiniDrawer from "../components/skills/MiniDrawer";

const Skills = () => {
  return (
    <MiniDrawer>
      <SkillsSection {...SKILLS_TECH.front} />
    </MiniDrawer>
  );
};

export default Skills;

/* <SkillsSection {...SKILLS_TECH.front} />
      <SkillsSection {...SKILLS_TECH.back} />
      <SkillsSection {...SKILLS_TECH.tech} />
      <SkillsProgressSection /> */

// <Switch>
//   <Route exact path="/(|about|projects|contact|styleguide)">
//     <Header />

//     {routes.map(({ path, Component }) => (
//       <Route key={path} exact path={path}>
//         {/* {({ match }) => (
//                   <CSSTransition
//                     in={match != null}
//                     timeout={3000}
//                     classNames="page"
//                     unmountOnExit
//                   >
//                     <div className={`page ${classes.root}`}>
//                       <Component />
//                     </div>
//                   </CSSTransition>
//                 )} */}
//         <Component />
//       </Route>
//     ))}
//   </Route>
//   <Route path="*" component={PageNotFound} />
// </Switch>;
