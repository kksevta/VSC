//used basically to provide struct or kind of defining ur own datatype
interface _chartDataSignature {
    xaxis: string;
    yaxis: string;
    optional?:string; 
    data: any;
}
interface getDataParams{
    product:string,
    
}



function getChartData(): _chartDataSignature {
    var obj = { xaxis: "x", yaxis: "y", data: {} };
    return obj;
}

