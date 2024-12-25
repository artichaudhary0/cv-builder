export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
}

export function validateDateRange(startDate: string, endDate: string): boolean {
  if (!startDate || !endDate) return true;
  return new Date(startDate) <= new Date(endDate);
}

export function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}