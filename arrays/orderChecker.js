// O(n) time and O(n) space
const isFirstComeFirstServedRecursively= (takeOutOrders, dineInOrders, servedOrders, takeOutOrdersIndex, dineInOrdersIndex, servedOrdersIndex) => {
  servedOrdersIndex = (typeof servedOrdersIndex !== 'undefined') ? servedOrdersIndex : 0;
  takeOutOrdersIndex = (typeof takeOutOrdersIndex !== 'undefined') ? takeOutOrdersIndex : 0;
  dineInOrdersIndex = (typeof dineInOrdersIndex !== 'undefined') ? dineInOrdersIndex : 0;

  //base case we've hit the end of the serverOrders
  if (servedOrdersIndex === servedOrders.length) {
    return true;
  }

  if ((takeOutOrdersIndex < takeOutOrders.length) &&
    (takeOutOrders[takeOutOrdersIndex] === servedOrders[servedOrdersIndex])) {
      takeOutOrdersIndex++;
  } else if ((dineInOrdersIndex < dineInOrders.length) &&
    (dineInOrders[dineInOrdersIndex] === servedOrders[servedOrdersIndex])) {
      dineInOrdersIndex++;
  } else {
      return false;
  }

  servedOrdersIndex++;
  return isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders, takeOutOrdersIndex, dineInOrdersIndex, servedOrdersIndex);
};

// O(n) Time and O(1) space
const isFirstComeFirstServedIterative = (takeOutOrders, dineInOrders, servedOrders) => {
  const takeOutOrdersIndex = 0; 
  const dineInOrdersIndex = 0;
  const takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  const dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (let i = 0; i < servedOrders.length; i++) {
      var order = servedOrders[i];

      if (takeOutOrdersIndex <= takeOutOrdersMaxIndex && order === takeOutOrders[takeOutOrdersIndex]) {
          takeOutOrdersIndex++;
      } else if (
          dineInOrdersIndex <= dineInOrdersMaxIndex && order === dineInOrders[dineInOrdersIndex]) {
              dineInOrdersIndex++;
          }
      else {
          return false;
      }
}

if (dineInOrdersIndex != dineInOrders.length || takeOutOrdersIndex != takeOutOrders.length) {
  return false;
}

return true;
}