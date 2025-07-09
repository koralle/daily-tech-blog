import dayjs from 'dayjs';
import 'dayjs/locale/ja';

export const formatDate = (format: string) => (date: Date) => dayjs(date).format(format);
