import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const hotLine = [
  {
    name: 'Police Emergency Service',
    desc: 'Police Emergency Hot Line',
    phoneNumber: '112',
  },
  {
    name: 'Sri Lanka Police Department',
    desc: 'Police Emergency Service',
    phoneNumber: '119',
  },
];

const mentalHealth = [
  {
    name: 'Dementia Hotline',
    desc: 'National Institute of Health',
    phoneNumber: '0113-140844',
  },
];

const suiside = [
  {
    name: 'Suicides Prevention Hotline',
    desc: 'Mental Health',
    phoneNumber: '1926',
  },
  {
    name: 'Suicides Prevention Hotline',
    desc: 'CCLine',
    phoneNumber: '1333',
  },
  {
    name: 'Suicides Prevention Hotline',
    desc: 'Sumithrayo',
    phoneNumber: '0112696666',
  },
];
export default function ResouseNumbers1() {
  const [search, setSearch] = useState('');
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
      }}>
      <View style={styles.ResouseNumbers1}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                backgroundColor: '#FBE0FF',
                padding: 10,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <AntDesign
                name="arrowleft"
                style={{
                  fontSize: 20,
                  color: '#DB01FF',
                }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.Txt872}>Resouse Numbers</Text>
          <TouchableOpacity
          // onPress={() => navigation.goBack()}
          >
            <View
              style={{
                backgroundColor: '#FBE0FF',
                padding: 10,
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 20,
              }}>
              <Feather
                name="bell"
                style={{
                  fontSize: 20,
                  color: '#DB01FF',
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.Component221}>
          <View style={styles.Group357}>
            <View
              style={{
                justifyContent: 'center',
                paddingRight: 6,
              }}>
              <AntDesign
                name="search1"
                style={{
                  fontSize: 22,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // padding: 20,
                }}
              />
            </View>
            <TextInput placeholder="Search ..." onChangeText={setSearch} />
          </View>
        </View>

        <View style={styles.Group34989}>
          <View style={styles.Group249}>
            <ScrollView>
              <View style={styles.Group234}>
                <View style={styles.Group662}>
                  <Text style={styles.Txt811}>Hot Lines</Text>
                  {hotLine
                    .filter(hotLine => {
                      if (search == '') {
                        return hotLine;
                      } else if (hotLine.name.toLowerCase()) {
                        return hotLine;
                      } else if (
                        hotLine.desc
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      ) {
                        return hotLine;
                      }
                    })

                    .map(hotLine => {
                      return (
                        <View style={styles.Component23}>
                          <View style={styles.Group691}>
                            <View style={styles.Group474}>
                              <Feather
                                name="phone-call"
                                style={{fontSize: 35, color: '#DB01FF'}}
                              />
                              <Image
                                style={styles.CurvedGift}
                                source={{
                                  uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/i21qs3ol0g-I207%3A1533%3B107%3A1384?alt=media&token=df70c80f-7dca-4497-af2e-8b8176b23779',
                                }}
                              />
                            </View>

                            <View style={styles.Group077}>
                              <Text style={styles.Txt194}>{hotLine.name}</Text>
                              <Text style={styles.Txt916}>{hotLine.desc}</Text>
                              <Text style={styles.Txt638}>
                                {hotLine.phoneNumber}
                              </Text>
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  <Text style={styles.Txt811}>Mental Health</Text>
                  {mentalHealth.map(mentalHealth => {
                    return (
                      <View style={styles.Component23}>
                        <View style={styles.Group691}>
                          <View style={styles.Group474}>
                            <Feather
                              name="phone-call"
                              style={{fontSize: 35, color: '#DB01FF'}}
                            />
                            <Image
                              style={styles.CurvedGift}
                              source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/i21qs3ol0g-I207%3A1533%3B107%3A1384?alt=media&token=df70c80f-7dca-4497-af2e-8b8176b23779',
                              }}
                            />
                          </View>

                          <View style={styles.Group077}>
                            <Text style={styles.Txt194}>
                              {mentalHealth.name}
                            </Text>
                            <Text style={styles.Txt916}>
                              {mentalHealth.desc}
                            </Text>
                            <Text style={styles.Txt638}>
                              {mentalHealth.phoneNumber}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                  <Text style={styles.Txt811}>Suiside/ Self Harm</Text>
                  {suiside.map(suiside => {
                    return (
                      <View style={styles.Component23}>
                        <View style={styles.Group691}>
                          <View style={styles.Group474}>
                            <Feather
                              name="phone-call"
                              style={{fontSize: 35, color: '#DB01FF'}}
                            />
                            <Image
                              style={styles.CurvedGift}
                              source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/i21qs3ol0g-I207%3A1533%3B107%3A1384?alt=media&token=df70c80f-7dca-4497-af2e-8b8176b23779',
                              }}
                            />
                          </View>

                          <View style={styles.Group077}>
                            <Text style={styles.Txt194}>{suiside.name}</Text>
                            <Text style={styles.Txt916}>{suiside.desc}</Text>
                            <Text style={styles.Txt638}>
                              {suiside.phoneNumber}
                            </Text>
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ResouseNumbers1: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'rgba(245,245,245,1)',
    width: '100%',
    height: '100%',
  },
  Txt872: {
    fontSize: 18,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.36,
    color: 'rgba(157,150,147,1)',
    marginRight: 37,
  },
  Component221: {
    display: 'flex',
    flexDirection: 'column',
    // paddingTop: 11.91,
    // paddingBottom: 9.91,
    paddingLeft: 27.91,
    // paddingRight: 243.91,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '90%',
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 40,
  },
  Group357: {
    display: 'flex',
    flexDirection: 'row',
  },
  Group34989: {
    position: 'absolute',
    top: 150,
    left: 5,
    width: 391,
    height: 855,
  },
  Group249: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    none: '0px',
    width: 389,
    height: 735,
  },
  Group234: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 350,
  },
  Group662: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
  },
  Txt811: {
    fontSize: 25,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    lineHeight: 32,
    color: 'rgba(26,7,0,1)',
    marginBottom: 21,
  },
  Group691: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 15,
    none: '0px',
    width: 264,
    height: 49,
  },
  Group474: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 18,
    borderRadius: 10,
    backgroundColor: 'rgba(251,224,255,1)',
    width: 50,
    height: 50,
  },
  CurvedGift: {
    width: 32,
    height: 32,
  },
  Group077: {
    display: 'flex',
    flexDirection: 'column',
  },
  Txt194: {
    fontSize: 18,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '700',
    color: 'rgba(26,7,0,1)',
    marginBottom: 4,
  },
  Txt916: {
    fontSize: 14,
    fontFamily: 'Red Hat Display, sans-serif',
    fontWeight: '600',
    letterSpacing: 0.28,
    color: 'rgba(157,150,147,1)',
    width: 191,
  },
  Txt638: {
    position: 'absolute',
    top: '95.45%',
    bottom: '83.04%',
    fontSize: 24,
    fontFamily: 'Red Rose, display',
    fontWeight: '700',
    letterSpacing: 0.48,
    color: 'rgba(157,150,147,1)',
    width: 191,
    height: 30,
  },

  Component23: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 12,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 357,
    height: 96,
  },
  Group691: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 17,
    paddingRight: 35,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(70,70,70,0.03)',
    elevation: 3,
    shadowOffset: {width: 0, height: 20},
  },
});
