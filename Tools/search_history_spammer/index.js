
// A list of all the sites that are going to be spammed
let listof_s = [
    "https://google.com",
    "https://bing.com",
    "https://www.google.com/search?q=what+is+the+time",
    "https://www.google.com/search?q=explain+y=mx+plus+b+simply",
    "https://classroom.google.com",
    "https://docs.google.com", 
    "https://slides.google.com",
    "https://ixl.com",
    "https://www.google.com/search?q=",
    "https://www.google.com/search?q=explain+x+intercept+and+how+to+find+it",
    "https://www.google.com/search?q=quadratic+formula",
    "forms.google.com",
    "https://www.google.com/search?q=explain+y=mx+plus+b+simply",
    "https://www.google.com/search?q=explain+x+intercept+and+how+to+find+it",
    "https://www.google.com/search?q=quadratic+formula",
    "https://www.google.com/search?q=how+to+solve+quadratic+equations",
    "https://www.google.com/search?q=differentiation+rules+calculus",
    "https://www.google.com/search?q=integration+techniques",
    "https://www.google.com/search?q=prime+number+theorem+explanation",
    "https://www.google.com/search?q=mathematical+proofs+examples",
    "https://www.google.com/search?q=graph+theory+basics",
    "https://www.google.com/search?q=linear+algebra+applications",
    "https://www.google.com/search?q=probability+theory",
        "https://www.google.com/search?q=geometry+formulas",
  "https://www.google.com/search?q=trigonometry+identities",
  "https://www.google.com/search?q=calculus+limits+examples",
  "https://www.google.com/search?q=differential+equations+solutions",
  "https://www.google.com/search?q=number+theory+conjectures",
  "https://www.google.com/search?q=combinatorics+problems",
  "https://www.google.com/search?q=game+theory+applications",
  "https://www.google.com/search?q=mathematical+modeling+techniques",
  "https://www.google.com/search?q=set+theory+basics",
  "https://www.google.com/search?q=complex+analysis+introduction",
  "https://www.google.com/search?q=logic+in+mathematics",
  "https://www.google.com/search?q=statistics+methods",
  "https://www.google.com/search?q=discrete+mathematics+problems",
  "https://www.google.com/search?q=algebraic+geometry+overview",
  "https://www.google.com/search?q=numerical+methods+applications",
  "https://www.google.com/search?q=chaos+theory+fundamentals",
  "https://www.google.com/search?q=topology+basics",
  "https://www.google.com/search?q=math+history+important+events",
  "https://www.google.com/search?q=math+education+techniques",
  "https://www.google.com/search?q=mathematical+analysis+concepts",
  "https://www.google.com/search?q=optimization+methods",
  "https://www.google.com/search?q=cryptography+algorithms",
  "https://www.google.com/search?q=numerical+analysis+techniques",
  "https://www.google.com/search?q=geometric+transformations",
  "https://www.google.com/search?q=fourier+transform+applications",
  "https://www.google.com/search?q=mathematical+logic+theorems",
  "https://www.google.com/search?q=actuarial+science+topics",
  "https://www.google.com/search?q=mathematical+biology+models",
  "https://www.google.com/search?q=mathematics+in+art",
  "https://www.google.com/search?q=mathematical+programming+problems",
  "https://www.google.com/search?q=mathematical+physics+concepts",
  "https://www.google.com/search?q=mathematical+ethics+issues",
  "https://www.google.com/search?q=mathematics+and+music+theory",
  "https://www.google.com/search?q=mathematical+psychology+studies",
  "https://www.google.com/search?q=mathematical+linguistics+topics",
  "https://www.google.com/search?q=mathematics+in+engineering",
  "https://www.google.com/search?q=mathematics+of+finance+applications",
  "https://www.google.com/search?q=mathematical+geography+methods",
  "https://www.google.com/search?q=mathematical+sociology+research",
  "https://www.google.com/search?q=mathematics+in+computing",
  "https://www.google.com/search?q=mathematical+economics+theories",
];
//A function that spamms all of the sites
async function spam_s() {
    let i = 0;
    while (i < listof_s.length) {
        await sleep(1000)
        window.open(listof_s[i]);
        i++;
    }    
}
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
spam_s()