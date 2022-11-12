import React from 'react';
import {StyleSheet, Image, Text, View, ImageBackground} from 'react-native';

export default function HistoryDetail() {
  return (
    <View style={styles.ViewIncident}>
      <View style={styles.Group1093}>
        <View style={styles.Group486}>
          <Text style={styles.Txt975}>19:02</Text>
          <Image
            style={styles.Group5}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-207%3A1593?alt=media&token=a542a45d-838e-4034-9ca8-44e4e254ebad',
            }}
          />
        </View>
        <View style={styles.Group1034}>
          <View style={styles.BackButton}></View>
          <Text style={styles.Txt9108}>History Details</Text>
          <View style={styles.Group643}>
            <View style={styles.Component24}>
              <View style={styles.Group926}>
                <Text style={styles.Txt784}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={styles.Txt935}>Details and proof of the incident</Text>
        <View style={styles.Actions}>
          <View style={styles.ButtonPrimary}>
            <Text style={styles.Txt4810}>EDIT</Text>
          </View>
          <Text style={styles.Txt068}>Delete</Text>
        </View>
        <Image
          style={styles.Group34876}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-207%3A1570?alt=media&token=ead173d6-a84b-401d-8d3b-8bef7256a1fe',
          }}
        />
      </View>
      <View style={styles.Group34901}>
        <View style={styles.ContentContentBlockSmall}>
          <Text style={styles.Txt683}>Title</Text>
        </View>
        <View style={styles.Group34898}>
          <View style={styles.ContentContentBlockSmall1}>
            <Text style={styles.Txt489}>Date</Text>
            <Text style={styles.Txt568}>12th May 2016</Text>
          </View>
          <View style={styles.ContentContentBlockSmall2}>
            <Text style={styles.Txt489}>Time</Text>
            <Text style={styles.Txt568}>07.20 PM</Text>
          </View>
        </View>
        <View style={styles.ContentContentBlockSmall2}>
          <Text style={styles.Txt489}>Where it took place</Text>
          <Text style={styles.Txt898}>Lorem ipsum dolor sit amet. </Text>
        </View>
        <View style={styles.ContentContentBlockSmall3}>
          <Text style={styles.Txt683}>What happened</Text>
        </View>
        <View style={styles.Group34900}>
          <View style={styles.ContentContentBlockSmall4}>
            <Text style={styles.Txt683}>Call Sent People</Text>
          </View>
          <Image
            style={styles.Group34899}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-207%3A1583?alt=media&token=fd2a6768-a7be-4ba2-9a10-528f3a214d1c',
            }}
          />
        </View>
      </View>
      <View style={styles.InputText}>
        <Text style={styles.Txt957}>Title for incident</Text>
      </View>
      <View style={styles.Group34916}>
        <View style={styles.InputText1}>
          <Text style={styles.Txt957}>Discription</Text>
        </View>
      </View>
      <Image
        style={styles.CurvedArrowLeft}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-207%3A1616?alt=media&token=4199e9aa-9609-41aa-b670-fac168c8bfef',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ViewIncident: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 433,
    height: 926,
  },
  Group1093: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Group486: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18,
  },
  Txt975: {
    fontSize: 18,
    fontFamily: 'SF Pro Display, sans-serif',
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: -0.36,
    color: 'rgba(26,7,0,1)',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 237,
  },
  Group5: {
    width: 73.6,
    height: 13,
  },

  Group1034: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 22,
  },
  BackButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(251,224,255,1)',
  },

  Txt9108: {
    fontSize: 24,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.48,
    color: 'rgba(157,150,147,1)',
    marginRight: 61,
  },
  Group643: {
    paddingTop: 12,
    paddingBottom: 11,
    paddingLeft: 13,
    paddingRight: 9,
    borderRadius: 15,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 50,
    height: 50,
  },
  Component24: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 10.83,
    paddingLeft: 12,
    paddingRight: 0,
    backgroundColor: 'white',
    /* url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-I207%3A1617%3B107%3A2121?alt=media&token=39915f79-d8fa-461d-a443-deecfe93f213) */
  },
  Group926: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 4,
    borderRadius: 6.5,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 13,
    height: 13,
  },
  Txt784: {
    fontSize: 7.5,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
  },

  Txt935: {
    fontSize: 24,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    letterSpacing: 0.48,
    color: 'rgba(26,7,0,1)',
    width: 366,
    marginBottom: 522,
  },
  Actions: {
    display: 'flex',
    flexDirection: 'column',
  },
  ButtonPrimary: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 31,
    paddingRight: 31,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: 'rgba(219,1,255,1)',
    width: 304,
  },
  Txt4810: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    justifyContent: 'center',
  },

  Txt068: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(219,1,255,1)',
    textAlign: 'center',
    justifyContent: 'center',
    width: 312,
  },

  Group34876: {
    width: 428,
    height: 127,
  },

  Group34901: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 209,
    left: 7,
    width: 399,
    height: 483,
  },
  ContentContentBlockSmall: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 56,
    paddingLeft: 65,
    paddingRight: 296,
    marginBottom: 24,
  },
  Txt683: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(0,0,0,1)',
  },

  Group34898: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 9,
  },
  ContentContentBlockSmall1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 31,
    paddingLeft: 65,
    paddingRight: 6,
    marginRight: 3,
  },
  Txt489: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(0,0,0,1)',
    marginBottom: 7,
  },
  Txt568: {
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    color: 'rgba(0,0,0,1)',
    width: 125,
  },

  ContentContentBlockSmall2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 31,
    paddingLeft: 65,
    paddingRight: 6,
  },
  Txt489: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(0,0,0,1)',
    marginBottom: 7,
  },
  Txt568: {
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    color: 'rgba(0,0,0,1)',
    width: 125,
  },

  ContentContentBlockSmall2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 31,
    paddingLeft: 65,
    paddingRight: 6,
  },
  Txt489: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(0,0,0,1)',
    marginBottom: 7,
  },
  Txt898: {
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    color: 'rgba(0,0,0,1)',
    width: 326,
  },

  ContentContentBlockSmall3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 56,
    paddingLeft: 65,
    paddingRight: 208,
    marginBottom: 65,
  },
  Txt683: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(0,0,0,1)',
  },

  Group34900: {
    position: 'relative',
    width: 399,
    height: 77,
  },
  ContentContentBlockSmall4: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 56,
    paddingLeft: 65,
    paddingRight: 204,
  },
  Txt683: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: 'rgba(0,0,0,1)',
  },

  Group34899: {
    position: 'absolute',
    top: 25,
    left: 58,
    width: 190,
    height: 36,
  },

  InputText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
    top: 228,
    left: 50,
    right: 40,
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 199,
    borderRadius: 8,
    backgroundColor: 'white',
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-I207%3A1609%3B144%3A620?alt=media&token=1227fe34-45e0-49c1-bc2b-22c4d3796e07) */
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(232,232,232,1)',
    width: 343,
    height: 50,
  },
  Txt957: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    color: 'rgba(189,189,189,1)',
  },

  Group34916: {
    position: 'absolute',
    top: 500,
    left: 58,
    backgroundColor: 'white',
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-I207%3A1611%3B144%3A620?alt=media&token=c1026f89-afe8-40b7-b4ba-bd1e26611b7a) */
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(232,232,232,1)',
    width: 343,
    height: 84,
  },
  InputText1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 32,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 242,
    borderRadius: 8,
    backgroundColor: 'white',
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/qah7eg7wgoj-I207%3A1611%3B144%3A620?alt=media&token=c1026f89-afe8-40b7-b4ba-bd1e26611b7a) */
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(232,232,232,1)',
  },
  Txt957: {
    fontSize: 16,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    color: 'rgba(189,189,189,1)',
  },

  CurvedArrowLeft: {
    position: 'absolute',
    top: '7.02%',
    bottom: '90.39%',
    left: '11.09%',
    right: '83.37%',
    width: 24,
    height: 24,
  },
});
