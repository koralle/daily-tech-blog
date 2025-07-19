import dayjs from 'dayjs';

export const formatDate = (format: string) => (date: Date) => dayjs(date).locale('ja').format(format);
