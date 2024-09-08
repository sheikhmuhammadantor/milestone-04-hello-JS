const calculateElectronicsBudget = (laptopQuantity, tabletsQuantity, mobileQuantity) => {
    const allLaptopPrice = laptopQuantity * 35000;
    const allTabletsPrice = tabletsQuantity * 35000;
    const allMobilePrice = mobileQuantity * 35000;
    return allLaptopPrice + allTabletsPrice + allMobilePrice;
}

const money = calculateElectronicsBudget(5, 10, 15);
console.log(`Total Money Required is : ${money}`);
