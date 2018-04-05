export const redirectLogin = () => {
  window.location = 'https://www.strava.com/oauth/authorize?client_id=24677&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force';
}