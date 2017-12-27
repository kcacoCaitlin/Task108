
var sumScores = 0;


function fillBlank()
{
    var rightAnswer = ["统一建模语言","封装性","多态性","继承性"];
    var blanks = document.getElementsByName("fillBlank");
    for(var i =0;i<blanks.length;i++)
    {
        if(i===0 && blanks[i]===rightAnswer[0])
        {
            sumScores+=5;
        }
        else
        {
            var answer = blanks[i].value;
            if(rightAnswer.indexOf(answer)!==-1&&rightAnswer.indexOf(answer)!==0)
            {
                sumScores+=5;
            }
        }
    }
}

function signalChoise()
{
    var singleChoice1 = document.getElementsByName("SingleChoice1");
    if(singleChoice1[1].checked)
    {
        sumScores+=10;
    }
    var singleChoice2 = document.getElementsByName("SingleChoice2");
    if(singleChoice2[0].checked)
    {
        sumScores+=10;
    }
}

function multipleChoise()
{
    var multipleChoise1 = document.getElementsByName("MultioleChoise1");
    if((multipleChoise1[0].checked) && (multipleChoise1[1].checked) &&(multipleChoise1[2].checked===false) && (multipleChoise1[3].checked))
    {
        sumScores+=10;
    }
    var multioleChoise2 = document.getElementsByName("MultioleChoise2");
    if((multioleChoise2[0].checked) && (multioleChoise2[1].checked) && (multioleChoise2[2].checked) && (multioleChoise2.checked===false))
    {
        sumScores+=10;
    }
}

function Judge()
{
    var judge1 = document.getElementsByName("Judge1");
    if(judge1[1].checked)
    {
        sumScores+=10;
    }
    var judge2 = document.getElementsByName("Judge2");
    if(judge2[0].checked)
    {
        sumScores+=10;
    }
}

function Answer()
{
    var answer = document.getElementById("ShortAnswer").value;
    if(answer==="模型是对现实世界的简化和抽象,模型是对所研究的系统,过程,事物或概念的一种表达形式.可以是物理实体;可以是某种图形;或者是一种数学表达式.")
    {
        sumScores+=20;
    }
}
function Results()
{
    fillBlank();
    signalChoise();
    multipleChoise();
    Judge();
    Answer();
    alert("您的得分是："+sumScores.toString());
    document.getElementById("scores").innerHTML = "得分："+sumScores.toString();

}