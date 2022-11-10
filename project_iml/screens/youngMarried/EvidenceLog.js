import React from "react"
import { StyleSheet, Image, Text, View, ScrollView, ImageBackground, TouchableOpacity } from "react-native"

export default function EvidenceLog({navigation}) {
  return (
    <View style={styles.EvidenceLog}>
      <View style={styles.Group1074}>
        <View style={styles.PageHeader}>
          <Text style={styles.Txt171}>Back</Text>
          <Text style={styles.Txt591}>Evidence Log</Text>
          <Text style={styles.Txt887}>Filter</Text>
        </View>
        <Text style={styles.Txt147}>View list of incidents recorded</Text>
        <View style={styles.Group34921}>
          <View style={styles.InputSearch}>
            <Text style={styles.Txt399}>Search</Text>
          </View>
        </View>
        <ScrollView>
        <View style={styles.ContentBlocks}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ViewIncident')}>
                <View style={styles.Group34902}>
                    <Image
                    style={styles.File_dock_duotone_line}
                    source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-12%3A313?alt=media&token=6f97b8e1-63f7-47a7-ae0a-92b6448a9af8",
                    }}
                        />
                        <View style={styles.ContentContentBlockSmall}>
                        <View style={styles.Group2110}>
                            <View style={styles.ContentBlock} />
                            <View style={styles.Group633}>
                            <View style={styles.Group411}>
                                <Text style={styles.Txt231}>Title 1</Text>
                                <Text style={styles.Txt217}>12/05/2016</Text>
                            </View>
                            <Text style={styles.Txt518}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc maximus...
                            </Text>
                            </View>
                        </View>
                        <View style={styles.DividerLine} />
                        </View>
                    </View>
        </TouchableOpacity>
          <View style={styles.Group34902}>
            <Image
              style={styles.File_dock_duotone_line}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-22%3A1392?alt=media&token=717eec10-7744-4e8c-aadf-5635c37acc01",
              }}
            />
            <View style={styles.ContentContentBlockSmall}>
              <View style={styles.Group2110}>
                <View style={styles.ContentBlock} />
                <View style={styles.Group633}>
                  <View style={styles.Group411}>
                    <Text style={styles.Txt556}>Title 2</Text>
                    <Text style={styles.Txt217}>12/05/2016</Text>
                  </View>
                  <Text style={styles.Txt518}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus...
                  </Text>
                </View>
              </View>
              <View style={styles.DividerLine} />
            </View>
          </View>
          <View style={styles.Group34902}>
            <Image
              style={styles.File_dock_duotone_line}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-13%3A319?alt=media&token=af7b5137-d637-41e5-8ca3-a76318ea36a1",
              }}
            />
            <View style={styles.ContentContentBlockSmall}>
              <View style={styles.Group2110}>
                <View style={styles.ContentBlock} />
                <View style={styles.Group633}>
                  <View style={styles.Group411}>
                    <Text style={styles.Txt827}>Title 3</Text>
                    <Text style={styles.Txt217}>12/05/2016</Text>
                  </View>
                  <Text style={styles.Txt518}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus...
                  </Text>
                </View>
              </View>
              <View style={styles.DividerLine} />
            </View>
          </View>
          <View style={styles.Group34902}>
            <Image
              style={styles.File_dock_duotone_line}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-22%3A1397?alt=media&token=ff1a58e0-0ae4-4d7b-ba85-438d0cb0dd9d",
              }}
            />
            <View style={styles.ContentContentBlockSmall}>
              <View style={styles.Group2110}>
                <View style={styles.ContentBlock} />
                <View style={styles.Group633}>
                  <View style={styles.Group411}>
                    <Text style={styles.Txt827}>Title 4</Text>
                    <Text style={styles.Txt217}>12/05/2016</Text>
                  </View>
                  <Text style={styles.Txt518}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus...
                  </Text>
                </View>
              </View>
              <View style={styles.DividerLine} />
            </View>
          </View>
          <View style={styles.Group34906}>
            <Image
              style={styles.File_dock_duotone_line}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-22%3A1400?alt=media&token=45572bf2-a520-4009-849d-d12d5e2defd3",
              }}
            />
            <View style={styles.ContentContentBlockSmall}>
              <View style={styles.Group2110}>
                <View style={styles.ContentBlock} />
                <View style={styles.Group633}>
                  <View style={styles.Group411}>
                    <Text style={styles.Txt556}>Title 5</Text>
                    <Text style={styles.Txt217}>12/05/2016</Text>
                  </View>
                  <Text style={styles.Txt518}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maximus...
                  </Text>
                </View>
              </View>
              <View style={styles.DividerLine} />
            </View>
          </View>
        </View>
        </ScrollView>   
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  EvidenceLog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 14,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 4,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 433,
    height: 926,
  },
  Group1074: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Group10410: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 36,
  },
  Txt157: {
    fontSize: 18,
    fontFamily: "SF Pro Display, sans-serif",
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: -0.36,
    color: "rgba(26,7,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 237,
  },
  Group5: {
    width: 73.6,
    height: 13,
  },

  PageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 39,
  },
  Txt171: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(219,1,255,1)",
    marginRight: 37,
  },
  Txt591: {
    fontSize: 30,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 32,
  },
  Txt887: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(219,1,255,1)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt147: {
    fontSize: 20,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: "400",
    letterSpacing: 0.4,
    color: "rgba(26,7,0,1)",
    width: 366,
    marginBottom: 37,
    paddingLeft: 20,
  },
  Group34921: {
    marginBottom: 37,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-I22%3A1401%3B144%3A2659?alt=media&token=efa6c176-ed43-4f61-b005-cb9707b226ad) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 338,
    height: 50,
  },
  InputSearch: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 13,
    paddingLeft: 15,
    paddingRight: 266,
    borderRadius: 100,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(246,246,246,1), rgba(246,246,246,1)),url(https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/0sxfmfbizpqa-I22%3A1401%3B144%3A2659?alt=media&token=efa6c176-ed43-4f61-b005-cb9707b226ad) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
  },
  Txt399: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    color: "rgba(189,189,189,1)",
  },

  ContentBlocks: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 54,
  },
  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: 343,
    height: 77,
  },
  File_dock_duotone_line: {
    width: 30,
    height: 30,
  },
  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
  Group411: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt231: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 154,
  },
  Txt217: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(219,1,255,0.47)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: 343,
    height: 77,
  },
  File_dock_duotone_line: {
    width: 30,
    height: 30,
  },
  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
  Group411: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt556: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 152,
  },
  Txt217: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(219,1,255,0.47)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: 343,
    height: 77,
  },
  File_dock_duotone_line: {
    width: 30,
    height: 30,
  },
  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
  Group411: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt827: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 151,
  },
  Txt217: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(219,1,255,0.47)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34902: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 16,
    width: 343,
    height: 77,
  },
  File_dock_duotone_line: {
    width: 30,
    height: 30,
  },
  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
  Group411: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt827: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 151,
  },
  Txt217: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(219,1,255,0.47)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34906: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 343,
    height: 77,
  },
  File_dock_duotone_line: {
    width: 30,
    height: 30,
  },
  ContentContentBlockSmall: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  Group2110: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  ContentBlock: {
    backgroundColor: "rgba(246,246,246,1)",
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  Group633: {
    display: "flex",
    flexDirection: "column",
  },
  Group411: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 7,
  },
  Txt556: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    marginRight: 152,
  },
  Txt217: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(219,1,255,0.47)",
    textAlign: "right",
    justifyContent: "flex-end",
  },

  Txt518: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "400",
    color: "rgba(0,0,0,1)",
    width: 270,
  },

  DividerLine: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(232,232,232,1)",
    width: 277,
    height: 1,
  },

  Group34875: {
    width: 428,
    height: 127,
  },
})
