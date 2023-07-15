function RandomQuotes() {
    var nameOfAuthor = ["_ Oscar Wilde" , "― Frank Zappa" , "― Mae West" , "― Mahatma Gandhi"]
    var quotes = ["“Be yourself; everyone else is already taken.”" , "“So many books, so little time.”" , 
                  "“You only live once, but if you do it right, once is enough.”" , "“Be the change that you wish to see in the world.”"]
    var num = Math.floor( Math.random() * nameOfAuthor.length )

    document.getElementById("quote").innerHTML = quotes[num]
    document.getElementById("author").innerHTML = nameOfAuthor[num]
}