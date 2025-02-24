
function solve(values)
{
    let insert=document.getElementById('ans');
    insert.value+=values
}
function result()
{
    let v1=document.getElementById('ans').value;
    v2=eval(v1);
    document.getElementById('ans').value=v2;
}
function clear()
{
    let input = document.getElementById('ans');
    input.value="";
}
function back()
{
    let back=document.getElementById('ans');
    back.value=back.value.slice(0,-1);

}