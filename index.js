const analyser = () =>
{
  var str=document.getElementById("inpt").value;
  //document.getElementById("inpt").value="";
  document.getElementById("preview").textContent=str;
  var v=0,c=0,sc=0,s=0,n=0,t;
  for (var i=0;i<str.length;i++)
  {
    t=str.charCodeAt(i);
    if (t == 65 || t==69 || t==73 || t==79 || t==85 || t == 97 || t==101 || t==105 || t==111 || t==117)
    {
      v++;
    }
    else if(t == 32)
    {
      s++;
    }
    else if(((t>=65) && (t<=90)) || ((t>=97) && (t<=122)))
    {
      c++;
    }
    else if((t>=48) && (t<=57))
    {
      n++;
    }
    else
    {
      sc++;
    }
  }
  document.getElementById("display_vowel").textContent=v;
  document.getElementById("display_space").textContent=s;
  document.getElementById("display_special_character").textContent=sc;
  document.getElementById("display_consonent").textContent=c;
  document.getElementById("display_number").textContent=n;
};