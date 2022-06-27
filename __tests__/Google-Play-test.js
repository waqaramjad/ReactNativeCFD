import PlayServices from 'react-native-play-services';

PlayServices.sync();

test('Google Play Status', () => {
  currentStatus = playServices();
  expect(currentStatus).toBe(PlayServices.GooglePlayServicesStatus.AVAILABLE);
});

const playServices = async () => {
  const status = await PlayServices.checkPlayServicesStatus();
  return status;
};
