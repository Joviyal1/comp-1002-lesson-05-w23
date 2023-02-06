const items = document.querySelectorAll(".price");
const total= document.querySelectorAll("#total");
/*let sum=0;
for(const item of items){
sum=sum+Number(item.textContent);
}
Total.textContent=sum;*/
const val=Array.from(items).reduce(sum,0);
total.textContent=Math.round(val*100)/100;

function sum(accum,ele)
{
    const eleVal=Number(ele.textContent) || 0;
    return accum+eleVal;
}