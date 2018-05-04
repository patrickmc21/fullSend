export const redirectLogin = () => {
  const url = 'https://www.strava.com/oauth/authorize';
  const urlOptions = '?client_id=24677&response_type=code&';
  const redirect = 'redirect_uri=http://http://fullsend.surge.sh/&approval_prompt=force';
  window.location = `${url}${urlOptions}${redirect}`;
};