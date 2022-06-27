import PlayServices from 'react-native-play-services';

PlayServices.sync();

test('Google Play Status', async () => {
  currentStatus = await PlayServices.checkPlayServicesStatus();
  // .then(response => response.json())
  // .then(data => {
  //   return data;
  // });
  expect(currentStatus).toBe(PlayServices.GooglePlayServicesStatus.AVAILABLE);
});
