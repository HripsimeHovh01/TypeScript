const currRate: string = '{"rate": 1.05}'; 

const fetchCurr = (response: string): { rate: number } => {
    const data = JSON.parse(response); 
    return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
    if (available) {
        const data = fetchCurr(currRate); 
        const res: number = data.rate * amount * commission; 
        console.log(res);
    } else {
        console.log("Сейчас обмен недоступен");
    }
}

transferEurToUsd(true, 500, 1.05);