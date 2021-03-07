function total(itemNumber, itemPrice, currentTotalPrice) {
    return (currentTotalPrice ? currentTotalPrice : 0) + itemNumber * itemPrice;
}
