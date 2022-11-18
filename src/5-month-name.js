const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  const incorrect = null;
  if (monthNumber > 12 || monthNumber < 1)
    return incorrect
    else 
   return months[monthNumber-1]
}
