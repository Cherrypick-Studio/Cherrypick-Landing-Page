import {useTranslations} from 'next-intl';

export const getEmailAction = (t) => {
  const subject = encodeURIComponent(t('contact.email_subject'));
  const body = encodeURIComponent(t('contact.email_body'));
  return `mailto:cherrypick.main@gmail.com?subject=${subject}&body=${body}`;
};
