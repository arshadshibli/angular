function today()
{
	var now=new Date();
	console.log(now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear());
}
function largestOfFive(a,b,c,d,e)
{
	var max=a;
	if(b>max)
		max=b;
	if(c>max)
		max=c;
	if(d>max)
		max=d;
	if(e>max)
		max=e;
	return max;
}

function insertDashes(n)
{
	var num=n.toString();
	var output="";
	var leng=num.length
	var even=new Set(["0","2","4","6","8"]);
	for(i=0;i<leng-1;i++)
	{
		if(even.has(num[i])&&even.has(num[i+1]))
		{
			output=output+num[i]+"-";
		}
		else
		{
			output=output+num[i];
		}
	}
	output=output+num[leng-1];
	return output;
}

function sortArrayAsc(arrayInput)
{
	var index=new Array();
	var stringArray=new Array();
	for(i=0;i<arrayInput.length;i++)
	{
		if(typeof arrayInput[i]=='string')
		{
			index.push(i);
			stringArray.push(arrayInput[i]);
		}

	}
	function compareAsc(a,b)
	{
		if(a<b)
			return -1;
		else if(a>b)
			return 1;
		else
			return 0;
	}
	stringArray.sort(compareAsc);
	for(i=0;i<index.length;i++)
	{
		arrayInput[index[i]]=stringArray[i];
	}
	return arrayInput;
}

function sortArrayDesc(arrayInput)
{
	var index=new Array();
	var stringArray=new Array();
	for(i=0;i<arrayInput.length;i++)
	{
		if(typeof arrayInput[i]=='string')
		{
			index.push(i);
			stringArray.push(arrayInput[i]);
		}

	}
	function compareDesc(a,b)
	{
		if(a<b)
			return 1;
		else if(a>b)
			return -1;
		else
			return 0;
	}
	stringArray.sort(compareDesc);
	for(i=0;i<index.length;i++)
	{
		arrayInput[index[i]]=stringArray[i];
	}
	return arrayInput;
}

function removeDuplicate(arrayInput)
{
	var setInput=new Set();
	for(i in arrayInput)
	{
		setInput.add(arrayInput[i]);
	}
	var output=setInput.values();
	return Array.from(output);
}

function differenceOfArray(array1,array2)
{
	var temp1=array1,temp2=array2;
	var set1=new Set;
	var set2=new  Set;
	for(i in array1)
	{
		set1.add(array1[i]);
	}
	for(i in array2)
	{
		set2.add(array2[i]);
	}
	for(i in array1)
	{
		if(set2.has(array1[i]))
			temp1.splice(i,1);
	}
	for(i in array2)
	{
		if(set1.has(array2[i]))
			temp2.splice(i,1);
	}
	return temp1.concat(temp2);

}

function sortObjectTitle(objArray)
{
	function compare(a,b)
	{
		if(a.title<b.title)
			return -1;
		else if(a.title>b.title)
			return 1;
		else
			return 0;
	}
	return objArray.sort(compare)
}

function isEmail(mailId)
{
	var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return (pattern.test(mailId));
}

function properties(object)
{
	return Object.keys(object);
}

function student(name,mark)
{
	this.name=name;
	this.mark=mark;
}

function grade(objArray)
{
	for student in objArray
	{
		var mark=objArray[student].mark;
		if(mark<60)
			objArray[student].grade="F";
		else if(mark<70)
			objArray[student].grade="E";
		else if(mark<70)
			objArray[student].grade="E";
		


	}
}