import dayjs from 'dayjs';

type FormatDateReturn = (format: string) => (date: Date) => string;

export const formatDate: FormatDateReturn = (format: string) => (date: Date) => dayjs(date).locale('ja').format(format);
