
From my own experiences working in small and large development teams, I learned that setting a baseline of skills and workflow know-how among the people in a technical team is as much important as the coding conventions.

Without a doubt, raising team members' skills (esp. juniors) to a standard will not only enhance collaboration (as they should know what others are doing) but also improve their productivity.

When forming up my front-end team at Nau Studio, I thought a lot about what are the most essential skills and technical knowledge which will become my team's baseline and focus of basic training.

Inspired by this popular article by Rebecca Murphey, [A Baseline for Front-End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/), I'm presenting Baseline for Modern Front End Developers (Not-Just-JavaScript edition) which is tailored to target juniors and more updated with latest trends:

To begin, let's talk about the three pillars of Web Front End:

## HTML

Many developers take HTML for granted. But the more they work with it, the more they'll realize that authoring HTML that is clear and lean requires great skills and I dare to say that it is kind of an art.

To become a successful developer with HTML, you must knows how to combine elements semantically while effectively. This involves well understanding of all common HTML elements in terms of not just default layout rules and styling but their semantic and contextual usage. Part of this is gained by experience but the principles can be taught and guided.

Helper resources:
- HTML5 Doctor: http://html5doctor.com/ 
- HTML basic tutorial: https://docs.webplatform.org/wiki/html/tutorials 

## CSS

Many CSS beginners, especially IT students in Viet Nam, have very brief lessons about CSS at web dev classes and related textbooks are outdated. Most will practice trial-and-error tinkering and master CSS very inefficiently. (Or at least it was my case at the beginning)

In my team, it is not the case. Fundamental concepts of CSS like cascading, specificity rules, selectors, inheritance, box model and stacking context must be well understood.

After the basic, you must then have some ideas of OOCSS or start practicing points from the CSS guidelines.

Besides, front end developers who do CSS well always have a few common tricks up their sleeves. For instance, they must know all the tricks to vertically align contents while Flex box is not yet mainstream. They must also knows when to use pseudo-elements, CSS shape tricks, icon fonts, or sprite sheet... to achieve the UI designs with best performance and compatibility results.

And last but not least, a modern front end developer should be able to use a CSS preprocessor (our favorite is SASS) to enhance maintainability and productivity of their work.

You might ask about CSS3 and cutting edge features? It will be a piece of cake once you've mastered the basis.

CSS Tutorials: https://docs.webplatform.org/wiki/css/tutorials 
OOCSS: https://github.com/stubbornella/oocss/wiki 
CSS Guidelines: http://cssguidelin.es/ 
CSS Tricks: http://css-tricks.com/ 

## JavaScript

jQuery may be [not an entrance requirement](http://youmightnotneedjquery.com/) to Web Front End any more but I think it is still a very helpful lead-in for beginners to the fragmented world of web browsers scripting.

Like Rebecca has made it clear, learning vanilla (pure) JavaScript is essential and if you haven’t read JavaScript: The Good Parts, it’s totally fine as long as you’ll learn from Eloquent Javascript or JavaScript Enlightenment and the like.

At any level, I believe, there are three key features of JavaScript that are crucial to your comprehension of the language; they are prototype chain, closures, and 'this' keyword. Other “interesting” features of the language such as dynamic typing, literals, variable and function hoisting... should be understood as well.

When you get more advanced in JS, and wanting to get a more structured and maintainable approach of doing it, you’ll learn JS idioms, patterns, modules and may be an MV* framework all along.

2015 is the year the next generation of JavaScript, ECMAScript 6 (AKA ES 2015), is finalized in specs and there is a huge rise of adoptions and use of es6-to-5 compilers. As one of the main users of the language, you don’t want to stand out of this trend. Get ready by learning ES6 new features and adopt the compile-to-es5 workflow as soon as you have the chance.

In my opinion, NodeJS is not in the baseline of Front End developers. Eventually, however, you will get to know it by using one of its many tool in the workflow or have to do some server-side coding using JS.

- [Eloquent JavaScript](http://eloquentjavascript.net/): Very good book for JS newbie, and it’s free.
- [JavaScript Enlightenment](http://www.javascriptenlightenment.com/): Another good book for newbie.
- [Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js/): Sometimes you read other’s JS code and can’t get it. Those “cypher” may be decoded here. ;)
- [TodoMVC](http://todomvc.com/): A go-to site for MVC frameworks evaluation and comparison
- [Writing Modular JS](http://addyosmani.com/writing-modular-js/): More details on modern JS modules
- [Understanding ES6](https://leanpub.com/understandinges6): Learn ECMAScript 6 with Nicholas C. Zakas

## The Modern Workflow
As I mentioned before, good team work is also affected by how well team members comply to conventions and coding style guides. In this modern age, however, it is not necessary for new joiners to learn by heart all those rules as long as they use linters (JSHint, CSSLint, SCSS-lint) and code styles checkers (JSCS), to impose and shape their coding styles.

In my team, we have a dotfiles repository which covers editor’s defaults and plugins, code linter config, most frequently used code snippets and some command line aliases and functions.

Since you develop for the Web, the browsers are undoubtedly your best sidekicks. Two know-hows I would strongly recommend are using the in-browser developer tools and so-called live reload software. Modern browsers all have decent built-in devtools, but the most sophisticated and useful one, to me, is Chrome's. For live reload software, I recommend looking at Browsersync.

Next to browsers, the code editor plays an as much important role. Whatever you choose, make sure it has decent code completion with live feedback linting. The other highly recommended features of modern front end editors are multiple cursors and fuzzy file search. If you ask me, I suggest checking Sublime Text or Atom. Besides, don’t miss out Emmet, the plugin that will “greatly improves HTML & CSS workflow”.

The Front End workflow can't be completed without mentioning automation tools like the command-line-based Grunt or Gulp or the GUI-based counter parts that are CodeKit or LiveReload. Modern web front end process targeting performance is becoming so complicated that it is very tedious to handle manually. Being able to use a process automation tool is becoming the baseline standard.

Other skills and knowledge that are too obvious to talk into details: version control system, software development process, agile methodologies, communication tooling and the OS platform you choose to work on.

Nau's Front End Dotfiles: A set of tools and config for our team’s workflow.
Automation with Grunt tutorial (in Vietnamese): I’ll guide you through using one of the most popular automation tools for Front End dev.
Front End Project Settings & Linters (in Vietnamese): Part of our scaffolding workflow, semi-manual for now, but will automated with Yeoman later.
Modern Front End workflow from start to finish: An insightful read or current Front End workflow.

## Progressive Enhancement 

Knowing progressive enhancement is now a must for modern Front End developers. It is not about the knowledge to implement websites exactly the same across browsers anymore, but ability to leverage the capability of each browser to provide the best experience on it. This requires developers to know how to use caniuse.com, modernizr, html5boilerplate as well as knowing when a polyfill / fallback is required.

Progressive Enhancement 2.0 by Nicholas Zakas:
https://youtu.be/hdTxeR90_1E
Progressive Enhancement: What Is It and How to Use It:
http://www.smashingmagazine.com/2009/04/22/progressive-enhancement-what-it-is-and-how-to-use-it/ 

## UI Skill set 

You should have some understanding of typography, UI and animation concepts and can speak UI jargon fluently with your UX/UI designer fellows. (i.e: hamburger button, hero banner, the fold…)

Besides, you should be able to open a Photoshop file to get the necessary assets for your UI development as well as extracting parameters (opacity, gradient, colors…) that are applicable for CSS authoring. These manual tasks may finally be replaced by auto CSS extraction by modern design tools (Photoshop CC 2014, Sketch…) but those know-hows will still benefit you that one day you are able to make some minor adjustment to the PSD without the help of designers. 

In 2015, a new skill you should also get a gasp of is using a vector graphics editing tool (Illustrator, Inkscape…) to manipulate and extract vector images which are essential for scalable graphics in modern flat designs.
Conclusion

There you go. If you are a Front End rookie or a back-end-to-front-end convert, you may feel there are a lot to learn just to meet the baseline. It is indeed. Some even compare us with kind of programming masochists. But we still go for it because we enjoy making beautiful and useful UI and we feel greatly rewarded when our creations are released to the whole world to see and experience.

My 2 cents, not every programmer is suitable with the web front end path. What makes a good front end dev different from back end or full stack one, I believe, is that we are more visual sensitive, we can work with pixels painstakingly and carry some characters of perfectionists.

## Addendum:
During the time I was writing this blog, Murphey published a new blog post about baseline for 2015 front end developers. I told myself not to read it until I finish this article to see how our ideas may collide or differ from one another.

I read Murphey’s post and I’m still glad I wrote this down. My target audience of this article are mostly mid-weight and below and to give you a good head start into Front End development and to collaborate better within a team. By all means, you will learn more advanced techniques through your progress with this career, but you can get away without first knowing how to write a NodeJS package or writing unit tests with Karma. Anyway, I hope both articles can give very good insights of this career path that is quite picky of its followers (And it is very new and demanding  in Viet Nam too).

