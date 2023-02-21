import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 0.72,
  },
  detailContainer: {
    //contact deets CONTAINER
    paddingTop: 15,
  },
  buttonRow: {
    //contact deets VIEW
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
  },
  button: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  },
  aboutBtnDetailColumn: {
    // contact deets description CONTAINER
    flexGrow: 1,
    marginStart: 17,
  },
  aboutBtnDetail: {
    lineHeight: 22,
    fontSize: 14,
    //fontFamily: 'SFProText-Medium',
    color: 'black',
  },
  aboutBtnDescription: {
    textDecorationLine: 'underline',
  },
  aboutBtnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialNetContainer: {
    //social buttons CONTAINER
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  socialButtonRow: {
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: 'gray',
  },
  disclaimer: {
    flex: 0.13,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  disclaimerNotes: {
    paddingTop: 10,
  },
  numberContainer: {
    flexDirection: 'row',
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 27,
  },
  spacedHorizontallyBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  languageButtonBackground: {
    backgroundColor: 'pink',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 2,
  },
  languageButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageButtonText: {
    marginEnd: 10,
  },
  sectionDivider: {
    paddingVertical: 15,
  },
});

export default styles;
