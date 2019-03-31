
var axios=require('axios');
var cheerio=require('cheerio')


module.exports={

    getRandomProfile:function(){
        return axios.get("https://randomuser.me/api/")
    },

    getListOfPeople:function(){
        return axios.get("https://randomuser.me/api/?results=10")
    },

    populateSearchBox:function(){
        return axios.get("https://randomuser.me/api/?results=30")
    },

    getFriends:function(){
        return axios.get("https://randomuser.me/api/?results=6")
    },


    // sendSite:function(site){
    //     console.log(site)
    //     this.scrapeArticles(site)
    // },

    scrapeArticles:function(site,cb){
        console.log("site: " + site)
        if(site === ""){
            site="climbing"
        }
     
        switch(site){

            case "climbing":
            return(
            
                axios.get("https://www.rockandice.com")
        .then(res=>{
            var data={
                link:[],
                image:[]
            }
            var $=cheerio.load(res.data)

            $(".ext_height").each(function(i,element){
              //  console.log($(this).children("div").children("a").children("img").attr("src"))
               // console.log($(this).children("div").children("a").attr("href"))
               if($(this).children("div").children("a").attr("href") === undefined){
                   console.log("no good!")
               }
               else{
                   data.link.push($(this).children("div").children("a").attr("href"))
                   data.image.push($(this).children("div").children("a").children("img").attr("src"))
                  console.log(data)
               }
              
            })
            cb(data)
        })

            )
            break;

            /* block by CORS but pretty sure its good */
            /* FUTURE PROJECT. CHEERIO THE FUCk outta NYTIMES, its doable!! */
            case "ny times":
            console.log("Ny Times Condition pinged!")
            return axios.get("https://www.nytimes.com/section/politics")
            .then(res=>{
                var data=[];
                var $=cheerio.load(res.data)
                $('.css-ye6x8s').each(function(e,i){
                   console.log($(this).children('div').children('div').children('a').attr("href"))
                })
            })

          
        } 
        
     
    }
}