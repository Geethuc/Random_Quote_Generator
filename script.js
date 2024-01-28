const btn=document.getElementById("btn");
let container=document.getElementById("container");
function generate(){
    var quotes={
     "― Albert Einstein":'“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.”',
     "― George Orwell":'“War is peace.Freedom is slavery.Ignorance is strength.”',
     "_ Carol Burnett":'"When you have a dream,you have got to grab it and never let go."',
     "_ Martin Luther King Jr":'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that"',
     "_Benjamin Franklin":'"Well done is better than well said"',
     "_ Aristotle":'"It is during our darkest moments that we must focus to see the light"',
    }
    var  authors =Object.keys(quotes);
    var author =authors[Math.floor(Math.random()*authors.length)];
    var quote=quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML=author;
}