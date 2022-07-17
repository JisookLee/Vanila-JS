const quotes = [
    {quotes:"인생에 뜻을 세우는데 적당한 때는 없다.",
author:"볼드윈",},
{quotes:"실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.",
author:"하버트 개서",},
{quotes:"너 자신이 돼라. 다른 사람은 이미 있으니까.",
author:"오스카 와일드",},
{quotes:"승자는 시간을 관리하며 살고 패자는 시간에 끌려 산다.",
author:"J. 하비스",},
{quotes:"최고에 도달하려면 최저에서 시작해라.",
author:"P. 시루스",},
{quotes:"행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
author:"칭기즈칸",},
{quotes:"일단 시작해라. 나중에 완벽해지면 된다.",
author:"론 무어",},
{quotes:"가장 큰 위험은 위험 없는 삶이다.",
author:"스티븐 코비",},
{quotes:"오늘 할 수 있는 일을 내일로 미루지 마라.",
author:"벤자민 프랭클린",},
{quotes:"모든 사람들로부터 사랑받지 않아도 된다.",
author:"니체",},
{quotes:"못하는 일에 초점 맞추기를 그만하면 자기가 어떤 일을 할 수 있는지 알고 놀라게 될 것이다.",
author:"앨릭스 코브",},
{quotes:"삶이 가치가 있다고 믿어라.그러면 그 믿음은 현실이 될 것이다.",
author:"윌리엄 제임스",},
{quotes:"당신이 어려움을 겪고 항복하지 않기로 결정할 때, 그것이 힘이다.",
author:"아놀드 슈왈제네거",},
{quotes:"불가능을 하는 것은 좀 재미있다. ",
author:"월트 디즈니",},
{quotes:"나보다 시작이 나은 선수들이 있겠지만, 나는 끝이 강한 선수다.",
author:"우사인 볼트",},
{quotes:"당신이 키워진 틀에서 벗어나지 못하면, 당신은 세상이 얼마나 더 큰지 이해하지 못할 것이다.",
author:"Angelina Jolie",},
{quotes:"하지만 저는 왠지 충분히 어두울 때만 여러분들이 별들을 볼 수 있다는 것을 압니다.",
author:"마틴 루터 킹",},

]

const author = document.querySelector("#quote div:last-child");
const quote = document.querySelector("#quote div:first-child");

const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
console.log(randomQuote);
author.innerText = `by. ${randomQuote.author}`;
quote.innerText = `" ${randomQuote.quotes} "`;
