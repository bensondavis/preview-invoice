const calculateDueDate = (startDate: Date, numberOfDays: number) => {
  const startDateObj = new Date(startDate);
  const timeInMs = numberOfDays * 24 * 60 * 60 * 1000;
  const endDateObj = new Date(startDateObj.getTime() + timeInMs);
  const endDate = endDateObj.toISOString().split("T")[0];
  return endDate;
};

const calculateOverDueDays = (dueDate: string) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const timeDiff = currentDate.getTime() - dueDateObj.getTime();
  if (timeDiff < 0) return 0;

  const overdueDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return overdueDays;
};

export {calculateDueDate, calculateOverDueDays};