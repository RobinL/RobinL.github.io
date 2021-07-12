(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[650],{2263:function(e,t,a){"use strict";a(7294);var o=a(835),r=a(5802),n=a(7414),s=a(6140),i=a(674);t.Z=function(e){var t;return t=e.define?(0,i.tZ)(r.Z,{define:e.define,output_order:e.output_order}):e.children,(0,i.tZ)(o.Z,{css:e.className},(0,i.tZ)(s.Z,{title:e.post_frontmatter.title,description:e.post_frontmatter.description}),(0,i.tZ)(n.Z,{post_frontmatter:e.post_frontmatter}),t)}},4975:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p},frontmatter:function(){return h}});a(7294);var o=a(2263),r=(a(9601),a(3948),a(6992),a(1539),a(7941),a(4983)),n=a(674);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}var i={_frontmatter:{}};function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return(0,r.kt)("wrapper",s({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Demystifying Apache Arrow"),(0,r.kt)("h3",null,(0,r.kt)("em",{parentName:"h3"},"Learning more about a tool that can filter and aggregate two billion rows on a laptop in two seconds")),(0,r.kt)("p",null,"In my work as a data scientist, I’ve come across Apache Arrow in a range of seemingly-unrelated circumstances. However, I’ve always struggled to describe exactly what it is, and what it does."),(0,r.kt)("p",null,"The official description of Arrow is:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a cross-language development platform for in-memory analytics")),(0,r.kt)("p",null,"which is quite abstract — and for good reason. The project is extremely ambitious, and aims to provide the backbone for a",(0,r.kt)("a",s({parentName:"p"},{href:"https://arrow.apache.org/powered_by/"})," wide range")," of data processing tasks. This means it sits at a low level, providing building blocks for higher level, user-facing, analytics tools like pandas or dplyr."),(0,r.kt)("p",null,"As a result, the importance of the project can be hard to understand for users who run into it occasionally in their day to day work, because much of what it does is behind the scenes."),(0,r.kt)("p",null,"In this post I describe some of the user-facing features of Apache Arrow which I have run into in my work, and explain why they are all facets of more fundamental problems which Apache Arrow aims to solve."),(0,r.kt)("p",null,"By connecting these dots it becomes clear why Arrow is not just a useful tool to solve some practical problems today, but one of the most exciting emerging tools, with the potential to be the engine behind large parts of future data science workflows."),(0,r.kt)("h3",null,"Faster csv reading"),(0,r.kt)("p",null,"A striking feature of Arrow is that it can read csvs into Pandas",(0,r.kt)("a",s({parentName:"p"},{href:"https://youtu.be/fyj4FyH3XdU?t=1030"})," more than 10x faster")," than pandas.read.csv."),(0,r.kt)("p",null,"This is actually a two step process: Arrow reads the data into memory in an Arrow table, which is really just a collection of record batches, and then converts the Arrow table into a pandas dataframe."),(0,r.kt)("p",null,"The speedup is thus a consequence of the underlying design of Arrow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Arrow has its own in-memory storage format. When we use Arrow to load data into Pandas, we are really loading data into the Arrow format (an in-memory format for data frames), and then translating this into the pandas in-memory format. Part of the speedup in reading csvs therefore comes from the careful design of the Arrow columnar format itself.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data in Arrow is stored in-memory in record batches, a 2D data structure containing contiguous columns of data of equal length. A ‘",(0,r.kt)("a",s({parentName:"p"},{href:"http://arrow.apache.org/docs/python/data.html#tables"}),"table"),"’ can be created from these batches without requiring additional memory copying, because tables can have ‘chunked’ columns (i.e. sections of data, each part representing a contiguous chunk of memory). This design means that data can be read in parallel rather than the single-threaded approach of pandas."))),(0,r.kt)("h3",null,"Faster User Defined Functions (UDF) in PySpark"),(0,r.kt)("p",null,"Running Python user defined functions in Apache Spark has historically been very slow — so slow that the usual recommendation was not to do it on datasets of any significant size."),(0,r.kt)("p",null,"More recently, Apache Arrow has made",(0,r.kt)("a",s({parentName:"p"},{href:"https://spark.apache.org/docs/latest/sql-pyspark-pandas-with-arrow.html#apache-arrow-in-pyspark"})," it possible to efficiently transfer data between JVM and Python processes.")," Combined with vectorised UDFs, this has resulted in",(0,r.kt)("a",s({parentName:"p"},{href:"https://spark.apache.org/docs/latest/sql-pyspark-pandas-with-arrow.html#apache-arrow-in-pyspark"})," huge speedups"),"."),(0,r.kt)("p",null,"What’s going on here?"),(0,r.kt)("p",null,"Prior to the introduction of Arrow, the process of translating data from the Java representation to the Python representation and back was slow — involving serialisation and deserialisation. It was also one-row-at-a-time, which is slower because many optimised data processing operations work most efficiently on data held in a columnar format, which data in each column held in contiguous sections of memory."),(0,r.kt)("p",null,"The use of Arrow almost completely eliminates the serialisation and deserialisation step, and also allows data to be processed in columnar batches, meaning more efficient vectorised algorithms can be used."),(0,r.kt)("p",null,"The ability of Arrow to transfer data between languages without a large serialisation/deserialisation overhead is a key feature, making it much more feasible for algorithms implemented in one language being able to be used by data scientists working in other languages."),(0,r.kt)("h3",null,"Reading folders of files as a single table"),(0,r.kt)("p",null,"Arrow is able to read a folder containing many data files into a single dataframe. Arrow also supports reading folders where data is",(0,r.kt)("a",s({parentName:"p"},{href:"https://blog.cloudera.com/improving-query-performance-using-partitioning-in-apache-hive/"})," partitioned into subfolders"),"."),(0,r.kt)("p",null,"This functionality is illustrative of the higher-level design of Arrow around record batches. If everything is a record batch, then it matters little whether the source data is stored in a single file or multiple files."),(0,r.kt)("h3",null,"Reading parquet files"),(0,r.kt)("p",null,"Arrow can be used to read parquet files into data science tools like Python and R, correctly representing the data types in the target tool. Since parquet is a self-describing format, with the data types of the columns specified in the schema, getting data types right may not seem difficult. But a process of translation is still needed to load data into different data science tools, and this is surprisingly complex."),(0,r.kt)("p",null,"For example, historically the pandas integer type has not allowed integers to be null, despite this being possible in parquet files. Similar quirks apply to other languages. Arrow handles this process of translation for us. Data is always loaded into the Arrow format first, but Arrow provides translators that are then able to convert this into language-specific in-memory formats like the pandas dataframe. This means that for each target format, a single format-to-arrow translator is needed, a huge improvement over the current situation of ‘n take 2’ translators being needed (one for each pair of tools)."),(0,r.kt)("p",null,"This problem of translation is one that Arrow aims eventually to eliminate altogether: ideally there would be a single in-memory format for dataframes rather than each tool having its own representation."),(0,r.kt)("h3",null,"Writing parquet files"),(0,r.kt)("p",null,"Arrow makes it easy to write data held in-memory in tools like pandas and R to disk in Parquet format."),(0,r.kt)("p",null,"Why not just persist the data to disk in Arrow format, and thus have a single, cross-language data format that is the same on-disk and in-memory? One of the biggest reasons is that Parquet generally produces smaller data files, which is more desirable if you are IO-bound. This will especially be the case if you are loading data from cloud storage like such as AWS S3."),(0,r.kt)("p",null,"Julien LeDem explains this further in a blog post discussing the two",(0,r.kt)("a",s({parentName:"p"},{href:"https://www.kdnuggets.com/2017/02/apache-arrow-parquet-columnar-data.html"})," formats"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The trade-offs for columnar data are different for in-memory. For data on disk, usually IO dominates latency, which can be addressed with aggressive compression, at the cost of CPU. In memory, access is much faster and we want to optimise for CPU throughput by paying attention to cache locality, pipelining, and SIMD instructions.")),(0,r.kt)("p",null,"This makes it desirable to have close cooperation in the development of the in-memory and on-disk formats, with predictable and speedy translation between the two representations — and this is what is offered by the Arrow and Parquet formats."),(0,r.kt)("h2",null,"How do these ideas tie together?"),(0,r.kt)("p",null,"Whilst very useful, the user-facing features discussed so far are not revolutionary. The real power is in the potential of the underlying building blocks to enable new approaches to data science tooling. At the moment (autumn 2020), some of this is still work in progress by the team behind Arrow."),(0,r.kt)("h3",null,"Record batches and chunking"),(0,r.kt)("p",null,"In Apache Arrow, dataframes are composed of record batches. If stored on disk in Parquet files, these batches can be read into the in-memory Arrow format very quickly."),(0,r.kt)("p",null,"We’ve seen this can be used to read a csv file into memory. But more broadly this concept opens the door to entire data science workflows which are parallelised and operate on record batches, thereby eliminating the need for the full table to be stored in memory."),(0,r.kt)("h3",null,"A common (cross-language) in memory representation of data frames"),(0,r.kt)("p",null,"Currently, the close coupling of data science tools and their in-memory representations of dataframes means that algorithms written in one language are not easily portable to other languages. This means the same standard operations, such as filters and aggregations, get endlessly re-written and optimisations do not easily translate between tools."),(0,r.kt)("p",null,"Arrow provides a standard for representing dataframes in memory, and a mechanism for allowing multiple languages and to refer to the same in-memory data."),(0,r.kt)("p",null,"This",(0,r.kt)("a",s({parentName:"p"},{href:"https://docs.google.com/document/d/10RoUZmiMQRi_J1FcPeVAUAMJ6d_ZuiEbaM2Y33sNPu4/edit"})," creates an opportunity for the development of:")),(0,r.kt)("p",null,"an Arrow-native columnar query execution engine in C++, with intended use not only from C++ but also from user-space languages like Python, R, and Ruby."),(0,r.kt)("p",null,"This would provide a single, highly optimised codebase, available for use from multiple languages. The pool of developers who have an interest in maintaining and contributing to this library would be much larger because it would be available for use across a wide range of tools."),(0,r.kt)("h2",null,"The big idea"),(0,r.kt)("p",null,"These ideas come together in the description of Arrow as an ‘API for data’. The idea is that Arrow provides a cross-language in-memory data format, and an associated query execution language that provide the building blocks for analytics libraries. Like any good API, Arrow provides a performant solution to common problems without the user needing to fully understand the implementation."),(0,r.kt)("p",null,"This paves the way for a step change in data processing capabilities, with analytics libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"being parallelised by default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"applying highly optimised calculations on dataframes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"no longer needing to work with the constraint that the full dataset must fit into memory"))),(0,r.kt)("p",null,"whilst breaking down barriers to sharing data between tools via faster ways to transmit data between tools, either on a single machine or over the network."),(0,r.kt)("p",null,"We can get a glimpse of the potential of this approach in the ",(0,r.kt)("a",s({parentName:"p"},{href:"https://arrow.apache.org/docs/r/articles/dataset.html"}),"vignette in the Arrow package in R"),", in which a 37gb dataset with 2 billion rows is processed and aggregated on a laptop in under 2 seconds."),(0,r.kt)("p",null,"Where does this leave existing high-level data science tools and languages like SQL, pandas and R?"),(0,r.kt)("p",null,"As the vignette illustrates, the intention is not for Arrow to compete directly with these tools. Instead, higher level tools can use Arrow under the hood, imposing little constraint on their user-facing API. It therefore allows for continued innovation in the expressiveness and features of different tools whilst improving performance and saving authors the task of reinventing the common components."),(0,r.kt)("h2",null,"Further reading"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://arrow.apache.org/overview/"}),"https://arrow.apache.org/overview/")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://arrow.apache.org/use_cases/"}),"https://arrow.apache.org/use_cases/")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://arrow.apache.org/powered_by/"}),"https://arrow.apache.org/powered_by/")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://arrow.apache.org/blog/"}),"https://arrow.apache.org/blog/")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://ursalabs.org/blog/"}),"https://ursalabs.org/blog/")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://wesmckinney.com/archives.html"}),"https://wesmckinney.com/archives.html")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://www.youtube.com/watch?v=fyj4FyH3XdU"}),"https://www.youtube.com/watch?v=fyj4FyH3XdU")),(0,r.kt)("p",null,"Arrow design documents:"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/apache/arrow/pull/4225"}),"Filesystems API")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://docs.google.com/document/d/1bVhzifD38qDypnSjtf8exvpP3sSB5x_Kw9m-n66FB2c/edit?usp=sharing"}),"Datasets API")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://docs.google.com/document/d/1XHe_j87n2VHGzEbnLe786GHbbcbrzbjgG8D0IXWAeHg/edit#heading=h.g70gstc7jq4h"}),"DataFrame API")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://docs.google.com/document/d/10RoUZmiMQRi_J1FcPeVAUAMJ6d_ZuiEbaM2Y33sNPu4/edit?usp=sharing"}),"C++ Query Engine")))}l.isMDXComponent=!0;var h={title:"Demystifying Apache Arrow",post_date:"2020-10-22",code_url:"https://github.com/RobinL/robinl.github.io/blob/dev/src/mdx/demystifying_arrow.mdx",post_type:"mdx",post_category:"data",description:"Demystifying Apache Arrow - some observations from a data scientist. Learning more about a tool that can filter and aggregate two billion rows on a laptop in two seconds"},p=function(e){e.data;return(0,n.tZ)(o.Z,{post_frontmatter:h},(0,n.tZ)(l,null))}}}]);
//# sourceMappingURL=component---src-pages-demystifying-arrow-jsx-a8af6baeb086b514dc5f.js.map