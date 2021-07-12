(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[398],{2263:function(e,a,t){"use strict";t(7294);var n=t(835),s=t(5802),o=t(7414),r=t(6140),i=t(674);a.Z=function(e){var a;return a=e.define?(0,i.tZ)(s.Z,{define:e.define,output_order:e.output_order}):e.children,(0,i.tZ)(n.Z,{css:e.className},(0,i.tZ)(r.Z,{title:e.post_frontmatter.title,description:e.post_frontmatter.description}),(0,i.tZ)(o.Z,{post_frontmatter:e.post_frontmatter}),a)}},2424:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p},frontmatter:function(){return l}});t(7294);var n=t(2263),s=(t(9601),t(3948),t(6992),t(1539),t(7941),t(4983)),o=t(674);function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var i={_frontmatter:{}};function c(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return(0,s.kt)("wrapper",r({},i,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",null,"Fuzzy Matching and Deduplicating Hundreds of Millions of Records using Apache Spark"),(0,s.kt)("p",null,"A common data quality problem is to have multiple different records that refer to the same entity but no unique identifier that ties these entities together."),(0,s.kt)("p",null,"For instance, customer data may have been entered multiple times in multiple different computer systems, with different spellings of names, different addresses, and other typos. The lack of a unique customer identifier presents challenges at all stages of data analysis — from basic questions such counting the number of unique customers, to feature engineering of customers’ details for machine learning purposes."),(0,s.kt)("p",null,"There is a large body of theoretical and empirical work into this problem. The solution usually involves computing a new unique identifier column which allows entities to be linked and grouped, using a process of statistical estimation, machine learning and/or rules-based logic."),(0,s.kt)("p",null,"However, there is a lack of free software that can tackle this problem at the scale of millions of records — the size typically seen in large organisations. Solving the problem usually involves generating very large numbers of record comparisons and so is ill-suited to in-memory solutions in R or Python. Distributed computing frameworks like Apache Spark are a much better fit."),(0,s.kt)("p",null,"We have recently released a free and ",(0,s.kt)("a",r({parentName:"p"},{href:"https://github.com/moj-analytical-services/splink"}),"open source")," library called ",(0,s.kt)("code",r({parentName:"p"},{className:"language-text"}),"splink"),", that implements the Fellegi-Sunter/Expectation Maximisation approach, one of the key statistical models from the data linking literature. This is an unsupervised learning algorithm which yields a match score for each pair of record comparisons."),(0,s.kt)("h2",null,"Introducing splink"),(0,s.kt)("p",null,(0,s.kt)("a",r({parentName:"p"},{href:"https://github.com/moj-analytical-services/splink"}),"Splink")," is a Pyspark library available on PyPi that can be installed using ",(0,s.kt)("code",r({parentName:"p"},{className:"language-text"}),"pip")," . It can be run with Spark installed locally on your laptop, but for large jobs you will need access to a Spark cluster."),(0,s.kt)("p",null,"The aims of ",(0,s.kt)("code",r({parentName:"p"},{className:"language-text"}),"splink")," are to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Work at much greater scale than existing open source libraries (100 million records +)."),(0,s.kt)("li",{parentName:"ul"},"Compute results faster than existing open source implementations — with runtimes of less than an hour even for large record linking problems."),(0,s.kt)("li",{parentName:"ul"},"Have a transparent methodology, so the match scores can be easily explained both graphically and in words"),(0,s.kt)("li",{parentName:"ul"},"Have accuracy similar to some of the best alternatives, open source or commercial"),(0,s.kt)("li",{parentName:"ul"},"Have a simple interface that offers flexibility and customizability, so users can tackle the majority of record linking and deduplication problems"),(0,s.kt)("li",{parentName:"ul"},"Be robust, with an automated suite of unit and integration tests.")),(0,s.kt)("p",null,"We have been testing the library for several months now, tackling large-scale data linking problems with significantly improved accuracy from previous approaches."),(0,s.kt)("h2",null,"Try it out"),(0,s.kt)("p",null,"You can try out the library in a Jupyter notebook using our Binder link ",(0,s.kt)("a",r({parentName:"p"},{href:"https://mybinder.org/v2/gh/moj-analytical-services/splink_demos/master?urlpath=lab/tree/index.ipynb"}),"here"),". These demos illustrate how to use the library, but note they are running in local mode on free servers, so don’t expect fast performance."),(0,s.kt)("h2",null,"How it works"),(0,s.kt)("p",null,"The library estimates matches using the Fellegi-Sunter/Expectation Maximisation framework, which you can ",(0,s.kt)("a",r({parentName:"p"},{href:"https://www.robinlinacre.com/probabilistic_linkage/"}),"learn more about in my interactive training materials"),"."),(0,s.kt)("p",null,"First, a large number of record comparisons (candidate pairs) are generated using an approach called ",(0,s.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Record_linkage#Probabilistic_record_linkage"}),"blocking"),", which ensures only records that plausibly may refer to the same entity are generated."),(0,s.kt)("p",null,"Next, for each candidate pair, the fields (columns) are compared in turn — is there a match on first name, surname, date of birth, etc."),(0,s.kt)("p",null,"Next an iterative algorithm called Expectation Maximisation is used to maximise a likelihood function. This results in estimates of the amount of information contained in each field, and how this contributes to an overall assessment of whether the pair are a match."),(0,s.kt)("p",null,"For instance, consider a first name field:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If first name matches, how much does this increase our confidence that the records are a match?"),(0,s.kt)("li",{parentName:"ul"},"If first name does not match, how much does this decrease our confidence that the records are a match?")),(0,s.kt)("p",null,"This will vary between fields. High quality fields with very high cardinality such as a social security number contribute a lot more information than low quality fields with low cardinality such as a person’s gender."),(0,s.kt)("p",null,"This information is then combined into an overall score between 0 and 1 of whether the pairwise record comparison represents a match."),(0,s.kt)("h2",null,"Sample Code"),(0,s.kt)("p",null,"We have tried to design an interface which is simple but nevertheless can be adapted to most record linkage and deduplication problems."),(0,s.kt)("p",null,"To illustrate how easy the library is to use with default settings, the following code could be used to deduplicate a large dataset:"),(0,s.kt)("div",{className:"gatsby-highlight","data-language":"python"},(0,s.kt)("pre",r({parentName:"div"},{className:"language-python"}),(0,s.kt)("code",r({parentName:"pre"},{className:"language-python"}),"df ",(0,s.kt)("span",r({parentName:"code"},{className:"token operator"}),"=")," spark",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"."),"read",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"."),"parquet",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"path_to_your_data"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n\nsettings ",(0,s.kt)("span",r({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"link_type"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"dedupe_only"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"blocking_rules"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"["),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"l.first_name = r.first_name"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"l.surname = r.surname"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"l.dob = r.dob"'),"\n    ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"comparison_columns"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"["),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"col_name"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"first_name"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n            ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"term_frequency_adjustments"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token boolean"}),"True"),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"col_name"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"surname"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n            ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"term_frequency_adjustments"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token boolean"}),"True"),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"col_name"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"dob"'),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"col_name"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"city"'),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),","),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"{"),"\n            ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"col_name"'),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),":")," ",(0,s.kt)("span",r({parentName:"code"},{className:"token string"}),'"email"'),"\n        ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"]"),"\n",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",(0,s.kt)("span",r({parentName:"code"},{className:"token keyword"}),"from")," splink ",(0,s.kt)("span",r({parentName:"code"},{className:"token keyword"}),"import")," Splink\nlinker ",(0,s.kt)("span",r({parentName:"code"},{className:"token operator"}),"=")," Splink",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"("),"settings",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),",")," spark",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),",")," df",(0,s.kt)("span",r({parentName:"code"},{className:"token operator"}),"="),"df",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\ndf_e ",(0,s.kt)("span",r({parentName:"code"},{className:"token operator"}),"=")," linker",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"."),"get_scored_comparisons",(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",r({parentName:"code"},{className:"token punctuation"}),")"),"\n"))),(0,s.kt)("p",null,"The user has to configure two main parts of the problem:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Blocking rules. These are the rules to reduce the number of comparison records down from the Cartesian product to a computationally tractable number. In this case, record comparisons will only be generated for pairs where first name, surname or date of birth matches."),(0,s.kt)("li",{parentName:"ul"},"Comparison columns. The user must specify which columns in the input dataset contain useful information which help to identify entities.")),(0,s.kt)("p",null,"For complex record linkage problems, the ",(0,s.kt)("code",r({parentName:"p"},{className:"language-text"}),"settings")," object can become quite detailed. We have created an ",(0,s.kt)("a",r({parentName:"p"},{href:"https://moj-analytical-services.github.io/splink_settings_editor/"}),"interactive online tool")," for auto-completing and validating settings, which includes a series of examples."),(0,s.kt)("p",null,"Please do try ",(0,s.kt)("code",r({parentName:"p"},{className:"language-text"}),"splink")," and let us know what you think. You can raise issues or contribute at the ",(0,s.kt)("a",r({parentName:"p"},{href:"https://github.com/moj-analytical-services/splink"}),"Github repo")," or I’m @robinlinacre on Twitter."))}c.isMDXComponent=!0;var l={title:"Fuzzy Matching and Deduplicating Hundreds of Millions of Records using Apache Spark",post_date:"2020-04-16",code_url:"https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/introducing_splink.mdx",post_type:"mdx",post_category:"data",description:"Introducing splink, a Pyspark library for record linkage at scale using unsupervised learning"},p=function(e){e.data;return(0,o.tZ)(n.Z,{post_frontmatter:l},(0,o.tZ)(c,null))}}}]);
//# sourceMappingURL=component---src-pages-introducing-splink-jsx-914167a0422544240c89.js.map