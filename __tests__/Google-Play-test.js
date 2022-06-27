import PlayServices from 'react-native-play-services';

PlayServices.sync();

test('Google Play Status', async () => {
  currentStatus = await PlayServices.checkPlayServicesStatus();
  expect(currentStatus).toBe(PlayServices.GooglePlayServicesStatus.AVAILABLE);
});
