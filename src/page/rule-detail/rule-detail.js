import React, { Component } from 'react'

export default class RuleDetail extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">Chi tiết bộ quy tắc gõ</strong>
                </div>
                <ul className="nav nav-pills" role="tablist" style={{ marginLeft: '35px', marginTop: '15px' }}>
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="#home">Âm đầu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu1">Âm chính</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#menu2">Âm cuối</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="card-body container tab-pane active" id="home">
                    <div style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', padding: '15px' }}>Danh sách quy tắc cho Âm đầu</div>
                    <table id="bootstrap-data-table-1" className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Âm đầu</th>
                          <th>Phím Steno</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>	1	</td>
                          <td>	ngh	</td>
                          <td>	KR	</td>
                        </tr>
                        <tr>
                          <td>	2	</td>
                          <td>	đ	</td>
                          <td>	TP	</td>
                        </tr>
                        <tr>
                          <td>	3	</td>
                          <td>	kh	</td>
                          <td>	KH	</td>
                        </tr>
                        <tr>
                          <td>	4	</td>
                          <td>	gh	</td>
                          <td>	KP	</td>
                        </tr>
                        <tr>
                          <td>	5	</td>
                          <td>	b	</td>
                          <td>	P	</td>
                        </tr>
                        <tr>
                          <td>	6	</td>
                          <td>	gi	</td>
                          <td>	SH	</td>
                        </tr>
                        <tr>
                          <td>	7	</td>
                          <td>	c	</td>
                          <td>	K	</td>
                        </tr>
                        <tr>
                          <td>	8	</td>
                          <td>	d	</td>
                          <td>	SP	</td>
                        </tr>
                        <tr>
                          <td>	9	</td>
                          <td>	ch	</td>
                          <td>	SK	</td>
                        </tr>
                        <tr>
                          <td>	10	</td>
                          <td>	g	</td>
                          <td>	KP	</td>
                        </tr>
                        <tr>
                          <td>	11	</td>
                          <td>	h	</td>
                          <td>	H	</td>
                        </tr>
                        <tr>
                          <td>	12	</td>
                          <td>	k	</td>
                          <td>	K	</td>
                        </tr>
                        <tr>
                          <td>	13	</td>
                          <td>	l	</td>
                          <td>	SR	</td>
                        </tr>
                        <tr>
                          <td>	14	</td>
                          <td>	m	</td>
                          <td>	RH	</td>
                        </tr>
                        <tr>
                          <td>	15	</td>
                          <td>	n	</td>
                          <td>	PR	</td>
                        </tr>
                        <tr>
                          <td>	16	</td>
                          <td>	p	</td>
                          <td>	SPH	</td>
                        </tr>
                        <tr>
                          <td>	17	</td>
                          <td>	q	</td>
                          <td>	STK	</td>
                        </tr>
                        <tr>
                          <td>	18	</td>
                          <td>	r	</td>
                          <td>	R	</td>
                        </tr>
                        <tr>
                          <td>	19	</td>
                          <td>	s	</td>
                          <td>	S	</td>
                        </tr>
                        <tr>
                          <td>	20	</td>
                          <td>	t	</td>
                          <td>	T	</td>
                        </tr>
                        <tr>
                          <td>	21	</td>
                          <td>	th	</td>
                          <td>	TH	</td>
                        </tr>
                        <tr>
                          <td>	22	</td>
                          <td>	v	</td>
                          <td>	SPR	</td>
                        </tr>
                        <tr>
                          <td>	23	</td>
                          <td>	ph	</td>
                          <td>	PH	</td>
                        </tr>
                        <tr>
                          <td>	24	</td>
                          <td>	x	</td>
                          <td>	ST	</td>
                        </tr>
                        <tr>
                          <td>	25	</td>
                          <td>	ng	</td>
                          <td>	KR	</td>
                        </tr>
                        <tr>
                          <td>	26	</td>
                          <td>	nh	</td>
                          <td>	TK	</td>
                        </tr>
                        <tr>
                          <td>	27	</td>
                          <td>	tr	</td>
                          <td>	TR	</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-body container tab-pane fade" id="menu1">
                    <div style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', padding: '15px' }}>Danh sách quy tắc cho Âm chính</div>
                    <table id="bootstrap-data-table-2" className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Âm chính</th>
                          <th>Phím Steno</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>	1	</td>
                          <td>	uổ	</td>
                          <td>	-HSUO	</td>
                        </tr>
                        <tr>
                          <td>	2	</td>
                          <td>	uỗ	</td>
                          <td>	N-SUO	</td>
                        </tr>
                        <tr>
                          <td>	3	</td>
                          <td>	ă	</td>
                          <td>	*-A	</td>
                        </tr>
                        <tr>
                          <td>	4	</td>
                          <td>	uộ	</td>
                          <td>	N-UO	</td>
                        </tr>
                        <tr>
                          <td>	5	</td>
                          <td>	uớ	</td>
                          <td>	-SY	</td>
                        </tr>
                        <tr>
                          <td>	6	</td>
                          <td>	uỳa	</td>
                          <td>	-HEY	</td>
                        </tr>
                        <tr>
                          <td>	7	</td>
                          <td>	uờ	</td>
                          <td>	-HY	</td>
                        </tr>
                        <tr>
                          <td>	8	</td>
                          <td>	uở	</td>
                          <td>	-HSY	</td>
                        </tr>
                        <tr>
                          <td>	9	</td>
                          <td>	uỡ	</td>
                          <td>	N-SY	</td>
                        </tr>
                        <tr>
                          <td>	10	</td>
                          <td>	uâ	</td>
                          <td>	*-Y	</td>
                        </tr>
                        <tr>
                          <td>	11	</td>
                          <td>	uợ	</td>
                          <td>	N-Y	</td>
                        </tr>
                        <tr>
                          <td>	12	</td>
                          <td>	oạ	</td>
                          <td>	N-U	</td>
                        </tr>
                        <tr>
                          <td>	13	</td>
                          <td>	ía	</td>
                          <td>	-SIE	</td>
                        </tr>
                        <tr>
                          <td>	14	</td>
                          <td>	oả	</td>
                          <td>	-HSU	</td>
                        </tr>
                        <tr>
                          <td>	15	</td>
                          <td>	uê	</td>
                          <td>	-UE	</td>
                        </tr>
                        <tr>
                          <td>	16	</td>
                          <td>	ửa	</td>
                          <td>	-HSEW	</td>
                        </tr>
                        <tr>
                          <td>	17	</td>
                          <td>	ia	</td>
                          <td>	-IE	</td>
                        </tr>
                        <tr>
                          <td>	18	</td>
                          <td>	ũa	</td>
                          <td>	N-SUO	</td>
                        </tr>
                        <tr>
                          <td>	19	</td>
                          <td>	uỳ	</td>
                          <td>	-HUY	</td>
                        </tr>
                        <tr>
                          <td>	20	</td>
                          <td>	uô	</td>
                          <td>	-UO	</td>
                        </tr>
                        <tr>
                          <td>	21	</td>
                          <td>	ụa	</td>
                          <td>	N-UO	</td>
                        </tr>
                        <tr>
                          <td>	22	</td>
                          <td>	oắ	</td>
                          <td>	-S*U	</td>
                        </tr>
                        <tr>
                          <td>	23	</td>
                          <td>	uỵ	</td>
                          <td>	N-UY	</td>
                        </tr>
                        <tr>
                          <td>	24	</td>
                          <td>	oằ	</td>
                          <td>	-H*U	</td>
                        </tr>
                        <tr>
                          <td>	25	</td>
                          <td>	uỷ	</td>
                          <td>	-HSUY	</td>
                        </tr>
                        <tr>
                          <td>	26	</td>
                          <td>	oẳ	</td>
                          <td>	-HS*U	</td>
                        </tr>
                        <tr>
                          <td>	27	</td>
                          <td>	uỹ	</td>
                          <td>	N-SUY	</td>
                        </tr>
                        <tr>
                          <td>	28	</td>
                          <td>	oẵ	</td>
                          <td>	N-S*U	</td>
                        </tr>
                        <tr>
                          <td>	29	</td>
                          <td>	oặ	</td>
                          <td>	N*-U	</td>
                        </tr>
                        <tr>
                          <td>	30	</td>
                          <td>	uý	</td>
                          <td>	-SUY	</td>
                        </tr>
                        <tr>
                          <td>	31	</td>
                          <td>	ĩ	</td>
                          <td>	N-S*I	</td>
                        </tr>
                        <tr>
                          <td>	32	</td>
                          <td>	oẹ	</td>
                          <td>	N-AY	</td>
                        </tr>
                        <tr>
                          <td>	33	</td>
                          <td>	ướ	</td>
                          <td>	-SEW	</td>
                        </tr>
                        <tr>
                          <td>	34	</td>
                          <td>	oẻ	</td>
                          <td>	-HSAY	</td>
                        </tr>
                        <tr>
                          <td>	35	</td>
                          <td>	ườ	</td>
                          <td>	-HEW	</td>
                        </tr>
                        <tr>
                          <td>	36	</td>
                          <td>	oẽ	</td>
                          <td>	N-SAY	</td>
                        </tr>
                        <tr>
                          <td>	37	</td>
                          <td>	ưở	</td>
                          <td>	-HSEW	</td>
                        </tr>
                        <tr>
                          <td>	38	</td>
                          <td>	ưỡ	</td>
                          <td>	N-SEW	</td>
                        </tr>
                        <tr>
                          <td>	39	</td>
                          <td>	ượ	</td>
                          <td>	N-EW	</td>
                        </tr>
                        <tr>
                          <td>	40	</td>
                          <td>	uýa	</td>
                          <td>	-SEY	</td>
                        </tr>
                        <tr>
                          <td>	41	</td>
                          <td>	uya	</td>
                          <td>	-EY	</td>
                        </tr>
                        <tr>
                          <td>	42	</td>
                          <td>	oọ	</td>
                          <td>	N*-O	</td>
                        </tr>
                        <tr>
                          <td>	43	</td>
                          <td>	uỵa	</td>
                          <td>	N-EY	</td>
                        </tr>
                        <tr>
                          <td>	44	</td>
                          <td>	ữa	</td>
                          <td>	N-SEW	</td>
                        </tr>
                        <tr>
                          <td>	45	</td>
                          <td>	oà	</td>
                          <td>	-HU	</td>
                        </tr>
                        <tr>
                          <td>	46	</td>
                          <td>	oá	</td>
                          <td>	-SU	</td>
                        </tr>
                        <tr>
                          <td>	47	</td>
                          <td>	oã	</td>
                          <td>	N-SU	</td>
                        </tr>
                        <tr>
                          <td>	48	</td>
                          <td>	ĩa	</td>
                          <td>	N-SIE	</td>
                        </tr>
                        <tr>
                          <td>	49	</td>
                          <td>	oè	</td>
                          <td>	-HAY	</td>
                        </tr>
                        <tr>
                          <td>	50	</td>
                          <td>	ủa	</td>
                          <td>	-HSUO	</td>
                        </tr>
                        <tr>
                          <td>	51	</td>
                          <td>	oé	</td>
                          <td>	-SAY	</td>
                        </tr>
                        <tr>
                          <td>	52	</td>
                          <td>	a	</td>
                          <td>	-A	</td>
                        </tr>
                        <tr>
                          <td>	53	</td>
                          <td>	oò	</td>
                          <td>	-H*O	</td>
                        </tr>
                        <tr>
                          <td>	54	</td>
                          <td>	oó	</td>
                          <td>	-S*O	</td>
                        </tr>
                        <tr>
                          <td>	55	</td>
                          <td>	e	</td>
                          <td>	-E	</td>
                        </tr>
                        <tr>
                          <td>	56	</td>
                          <td>	yế	</td>
                          <td>	-SIE	</td>
                        </tr>
                        <tr>
                          <td>	57	</td>
                          <td>	yề	</td>
                          <td>	-HIE	</td>
                        </tr>
                        <tr>
                          <td>	58	</td>
                          <td>	i	</td>
                          <td>	*-I	</td>
                        </tr>
                        <tr>
                          <td>	59	</td>
                          <td>	ũ	</td>
                          <td>	N-SIU	</td>
                        </tr>
                        <tr>
                          <td>	60	</td>
                          <td>	yể	</td>
                          <td>	-HSIE	</td>
                        </tr>
                        <tr>
                          <td>	61	</td>
                          <td>	yễ	</td>
                          <td>	N-SIE	</td>
                        </tr>
                        <tr>
                          <td>	62	</td>
                          <td>	yệ	</td>
                          <td>	N-IE	</td>
                        </tr>
                        <tr>
                          <td>	63	</td>
                          <td>	o	</td>
                          <td>	-O	</td>
                        </tr>
                        <tr>
                          <td>	64	</td>
                          <td>	oă	</td>
                          <td>	*-U	</td>
                        </tr>
                        <tr>
                          <td>	65	</td>
                          <td>	u	</td>
                          <td>	-IU	</td>
                        </tr>
                        <tr>
                          <td>	66	</td>
                          <td>	iế	</td>
                          <td>	-SIE	</td>
                        </tr>
                        <tr>
                          <td>	67	</td>
                          <td>	iề	</td>
                          <td>	-HIE	</td>
                        </tr>
                        <tr>
                          <td>	68	</td>
                          <td>	y	</td>
                          <td>	-I	</td>
                        </tr>
                        <tr>
                          <td>	69	</td>
                          <td>	uỷa	</td>
                          <td>	-HSEY	</td>
                        </tr>
                        <tr>
                          <td>	70	</td>
                          <td>	iể	</td>
                          <td>	-HSIE	</td>
                        </tr>
                        <tr>
                          <td>	71	</td>
                          <td>	iễ	</td>
                          <td>	N-SIE	</td>
                        </tr>
                        <tr>
                          <td>	72	</td>
                          <td>	iệ	</td>
                          <td>	N-IE	</td>
                        </tr>
                        <tr>
                          <td>	73	</td>
                          <td>	ùa	</td>
                          <td>	-HUO	</td>
                        </tr>
                        <tr>
                          <td>	74	</td>
                          <td>	ua	</td>
                          <td>	-UO	</td>
                        </tr>
                        <tr>
                          <td>	75	</td>
                          <td>	yê	</td>
                          <td>	-IE	</td>
                        </tr>
                        <tr>
                          <td>	76	</td>
                          <td>	ựa	</td>
                          <td>	N-EW	</td>
                        </tr>
                        <tr>
                          <td>	77	</td>
                          <td>	uyế	</td>
                          <td>	-SEY	</td>
                        </tr>
                        <tr>
                          <td>	78	</td>
                          <td>	ứa	</td>
                          <td>	-SEW	</td>
                        </tr>
                        <tr>
                          <td>	79	</td>
                          <td>	uyề	</td>
                          <td>	-HEY	</td>
                        </tr>
                        <tr>
                          <td>	80	</td>
                          <td>	uyể	</td>
                          <td>	-HSEY	</td>
                        </tr>
                        <tr>
                          <td>	81	</td>
                          <td>	uyễ	</td>
                          <td>	N-SEY	</td>
                        </tr>
                        <tr>
                          <td>	82	</td>
                          <td>	iê	</td>
                          <td>	-IE	</td>
                        </tr>
                        <tr>
                          <td>	83	</td>
                          <td>	ơ	</td>
                          <td>	-W	</td>
                        </tr>
                        <tr>
                          <td>	84	</td>
                          <td>	ạ	</td>
                          <td>	N-A	</td>
                        </tr>
                        <tr>
                          <td>	85	</td>
                          <td>	uyệ	</td>
                          <td>	N-EY	</td>
                        </tr>
                        <tr>
                          <td>	86	</td>
                          <td>	ả	</td>
                          <td>	-HSA	</td>
                        </tr>
                        <tr>
                          <td>	87	</td>
                          <td>	uy	</td>
                          <td>	-UY	</td>
                        </tr>
                        <tr>
                          <td>	88	</td>
                          <td>	ấ	</td>
                          <td>	-S*W	</td>
                        </tr>
                        <tr>
                          <td>	89	</td>
                          <td>	ầ	</td>
                          <td>	-H*W	</td>
                        </tr>
                        <tr>
                          <td>	90	</td>
                          <td>	úa	</td>
                          <td>	-SUO	</td>
                        </tr>
                        <tr>
                          <td>	91	</td>
                          <td>	ẩ	</td>
                          <td>	-HS*W	</td>
                        </tr>
                        <tr>
                          <td>	92	</td>
                          <td>	ẫ	</td>
                          <td>	N-S*W	</td>
                        </tr>
                        <tr>
                          <td>	93	</td>
                          <td>	ậ	</td>
                          <td>	N*-W	</td>
                        </tr>
                        <tr>
                          <td>	94	</td>
                          <td>	ắ	</td>
                          <td>	-S*A	</td>
                        </tr>
                        <tr>
                          <td>	95	</td>
                          <td>	ư	</td>
                          <td>	-UW	</td>
                        </tr>
                        <tr>
                          <td>	96	</td>
                          <td>	ưa	</td>
                          <td>	-EW	</td>
                        </tr>
                        <tr>
                          <td>	97	</td>
                          <td>	ằ	</td>
                          <td>	-H*A	</td>
                        </tr>
                        <tr>
                          <td>	98	</td>
                          <td>	ẳ	</td>
                          <td>	-HS*A	</td>
                        </tr>
                        <tr>
                          <td>	99	</td>
                          <td>	ẵ	</td>
                          <td>	N-S*A	</td>
                        </tr>
                        <tr>
                          <td>	100	</td>
                          <td>	ặ	</td>
                          <td>	N*-A	</td>
                        </tr>
                        <tr>
                          <td>	101	</td>
                          <td>	uỹa	</td>
                          <td>	N-SEY	</td>
                        </tr>
                        <tr>
                          <td>	102	</td>
                          <td>	ẹ	</td>
                          <td>	N-E	</td>
                        </tr>
                        <tr>
                          <td>	103	</td>
                          <td>	ẻ	</td>
                          <td>	-HSE	</td>
                        </tr>
                        <tr>
                          <td>	104	</td>
                          <td>	ỉa	</td>
                          <td>	-HSIE	</td>
                        </tr>
                        <tr>
                          <td>	105	</td>
                          <td>	ẽ	</td>
                          <td>	N-SE	</td>
                        </tr>
                        <tr>
                          <td>	106	</td>
                          <td>	ế	</td>
                          <td>	-SOE	</td>
                        </tr>
                        <tr>
                          <td>	107	</td>
                          <td>	ề	</td>
                          <td>	-HOE	</td>
                        </tr>
                        <tr>
                          <td>	108	</td>
                          <td>	ể	</td>
                          <td>	-HSOE	</td>
                        </tr>
                        <tr>
                          <td>	109	</td>
                          <td>	ễ	</td>
                          <td>	N-SOE	</td>
                        </tr>
                        <tr>
                          <td>	110	</td>
                          <td>	ệ	</td>
                          <td>	N-OE	</td>
                        </tr>
                        <tr>
                          <td>	111	</td>
                          <td>	uyê	</td>
                          <td>	-EY	</td>
                        </tr>
                        <tr>
                          <td>	112	</td>
                          <td>	ỉ	</td>
                          <td>	-HS*I	</td>
                        </tr>
                        <tr>
                          <td>	113	</td>
                          <td>	ị	</td>
                          <td>	N*-I	</td>
                        </tr>
                        <tr>
                          <td>	114	</td>
                          <td>	uơ	</td>
                          <td>	-Y	</td>
                        </tr>
                        <tr>
                          <td>	115	</td>
                          <td>	ọ	</td>
                          <td>	N-O	</td>
                        </tr>
                        <tr>
                          <td>	116	</td>
                          <td>	ỏ	</td>
                          <td>	-HSO	</td>
                        </tr>
                        <tr>
                          <td>	117	</td>
                          <td>	uấ	</td>
                          <td>	-S*Y	</td>
                        </tr>
                        <tr>
                          <td>	118	</td>
                          <td>	ố	</td>
                          <td>	-SOW	</td>
                        </tr>
                        <tr>
                          <td>	119	</td>
                          <td>	oa	</td>
                          <td>	-U	</td>
                        </tr>
                        <tr>
                          <td>	120	</td>
                          <td>	uầ	</td>
                          <td>	-H*Y	</td>
                        </tr>
                        <tr>
                          <td>	121	</td>
                          <td>	ồ	</td>
                          <td>	-HOW	</td>
                        </tr>
                        <tr>
                          <td>	122	</td>
                          <td>	uẩ	</td>
                          <td>	-HS*Y	</td>
                        </tr>
                        <tr>
                          <td>	123	</td>
                          <td>	ừa	</td>
                          <td>	-HEW	</td>
                        </tr>
                        <tr>
                          <td>	124	</td>
                          <td>	ổ	</td>
                          <td>	-HSOW	</td>
                        </tr>
                        <tr>
                          <td>	125	</td>
                          <td>	oe	</td>
                          <td>	-AY	</td>
                        </tr>
                        <tr>
                          <td>	126	</td>
                          <td>	uẫ	</td>
                          <td>	N-S*Y	</td>
                        </tr>
                        <tr>
                          <td>	127	</td>
                          <td>	ỗ	</td>
                          <td>	N-SOW	</td>
                        </tr>
                        <tr>
                          <td>	128	</td>
                          <td>	uậ	</td>
                          <td>	N*-Y	</td>
                        </tr>
                        <tr>
                          <td>	129	</td>
                          <td>	ộ	</td>
                          <td>	N-OW	</td>
                        </tr>
                        <tr>
                          <td>	130	</td>
                          <td>	ớ	</td>
                          <td>	-SW	</td>
                        </tr>
                        <tr>
                          <td>	131	</td>
                          <td>	ờ	</td>
                          <td>	-HW	</td>
                        </tr>
                        <tr>
                          <td>	132	</td>
                          <td>	ở	</td>
                          <td>	-HSW	</td>
                        </tr>
                        <tr>
                          <td>	133	</td>
                          <td>	à	</td>
                          <td>	-HA	</td>
                        </tr>
                        <tr>
                          <td>	134	</td>
                          <td>	oo	</td>
                          <td>	*-O	</td>
                        </tr>
                        <tr>
                          <td>	135	</td>
                          <td>	ỡ	</td>
                          <td>	N-SW	</td>
                        </tr>
                        <tr>
                          <td>	136	</td>
                          <td>	á	</td>
                          <td>	-SA	</td>
                        </tr>
                        <tr>
                          <td>	137	</td>
                          <td>	â	</td>
                          <td>	*-W	</td>
                        </tr>
                        <tr>
                          <td>	138	</td>
                          <td>	ợ	</td>
                          <td>	N-W	</td>
                        </tr>
                        <tr>
                          <td>	139	</td>
                          <td>	ã	</td>
                          <td>	N-SA	</td>
                        </tr>
                        <tr>
                          <td>	140	</td>
                          <td>	ụ	</td>
                          <td>	N-IU	</td>
                        </tr>
                        <tr>
                          <td>	141	</td>
                          <td>	ủ	</td>
                          <td>	-HSIU	</td>
                        </tr>
                        <tr>
                          <td>	142	</td>
                          <td>	è	</td>
                          <td>	-HE	</td>
                        </tr>
                        <tr>
                          <td>	143	</td>
                          <td>	é	</td>
                          <td>	-SE	</td>
                        </tr>
                        <tr>
                          <td>	144	</td>
                          <td>	ứ	</td>
                          <td>	-SUW	</td>
                        </tr>
                        <tr>
                          <td>	145	</td>
                          <td>	ê	</td>
                          <td>	-OE	</td>
                        </tr>
                        <tr>
                          <td>	146	</td>
                          <td>	uế	</td>
                          <td>	-SUE	</td>
                        </tr>
                        <tr>
                          <td>	147	</td>
                          <td>	ừ	</td>
                          <td>	-HUW	</td>
                        </tr>
                        <tr>
                          <td>	148	</td>
                          <td>	ì	</td>
                          <td>	-H*I	</td>
                        </tr>
                        <tr>
                          <td>	149	</td>
                          <td>	uề	</td>
                          <td>	-HUE	</td>
                        </tr>
                        <tr>
                          <td>	150	</td>
                          <td>	í	</td>
                          <td>	-S*I	</td>
                        </tr>
                        <tr>
                          <td>	151	</td>
                          <td>	ử	</td>
                          <td>	-HSUW	</td>
                        </tr>
                        <tr>
                          <td>	152	</td>
                          <td>	uể	</td>
                          <td>	-HSUE	</td>
                        </tr>
                        <tr>
                          <td>	153	</td>
                          <td>	ữ	</td>
                          <td>	N-SUW	</td>
                        </tr>
                        <tr>
                          <td>	154	</td>
                          <td>	uễ	</td>
                          <td>	N-SUE	</td>
                        </tr>
                        <tr>
                          <td>	155	</td>
                          <td>	ự	</td>
                          <td>	N-UW	</td>
                        </tr>
                        <tr>
                          <td>	156	</td>
                          <td>	ươ	</td>
                          <td>	-EW	</td>
                        </tr>
                        <tr>
                          <td>	157	</td>
                          <td>	ò	</td>
                          <td>	-HO	</td>
                        </tr>
                        <tr>
                          <td>	158	</td>
                          <td>	uệ	</td>
                          <td>	N-UE	</td>
                        </tr>
                        <tr>
                          <td>	159	</td>
                          <td>	ỳ	</td>
                          <td>	-HI	</td>
                        </tr>
                        <tr>
                          <td>	160	</td>
                          <td>	ó	</td>
                          <td>	-SO	</td>
                        </tr>
                        <tr>
                          <td>	161	</td>
                          <td>	ô	</td>
                          <td>	-OW	</td>
                        </tr>
                        <tr>
                          <td>	162	</td>
                          <td>	ỵ	</td>
                          <td>	N-I	</td>
                        </tr>
                        <tr>
                          <td>	163	</td>
                          <td>	ìa	</td>
                          <td>	-HIE	</td>
                        </tr>
                        <tr>
                          <td>	164	</td>
                          <td>	ịa	</td>
                          <td>	N-IE	</td>
                        </tr>
                        <tr>
                          <td>	165	</td>
                          <td>	õ	</td>
                          <td>	N-SO	</td>
                        </tr>
                        <tr>
                          <td>	166	</td>
                          <td>	ỷ	</td>
                          <td>	-HSI	</td>
                        </tr>
                        <tr>
                          <td>	167	</td>
                          <td>	ỹ	</td>
                          <td>	N-SI	</td>
                        </tr>
                        <tr>
                          <td>	168	</td>
                          <td>	ù	</td>
                          <td>	-HIU	</td>
                        </tr>
                        <tr>
                          <td>	169	</td>
                          <td>	ú	</td>
                          <td>	-SIU	</td>
                        </tr>
                        <tr>
                          <td>	170	</td>
                          <td>	uố	</td>
                          <td>	-SUO	</td>
                        </tr>
                        <tr>
                          <td>	171	</td>
                          <td>	ý	</td>
                          <td>	-SI	</td>
                        </tr>
                        <tr>
                          <td>	172	</td>
                          <td>	uồ	</td>
                          <td>	-HUO	</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="card-body container tab-pane fade" id="menu2">
                    <div style={{ fontSize: '20px', fontWeight: 600, marginBottom: '20px', padding: '15px' }}>Danh sách quy tắc cho Âm cuối</div>
                    <table id="bootstrap-data-table-3" className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Âm cuối</th>
                          <th>Phím Steno</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>	1	</td>
                          <td>	p	</td>
                          <td>	-TK	</td>
                        </tr>
                        <tr>
                          <td>	2	</td>
                          <td>	c	</td>
                          <td>	-NK	</td>
                        </tr>
                        <tr>
                          <td>	3	</td>
                          <td>	t	</td>
                          <td>	-NT	</td>
                        </tr>
                        <tr>
                          <td>	4	</td>
                          <td>	ch	</td>
                          <td>	-GK	</td>
                        </tr>
                        <tr>
                          <td>	5	</td>
                          <td>	u	</td>
                          <td>	-JG	</td>
                        </tr>
                        <tr>
                          <td>	6	</td>
                          <td>	ng	</td>
                          <td>	-G	</td>
                        </tr>
                        <tr>
                          <td>	7	</td>
                          <td>	i	</td>
                          <td>	-J	</td>
                        </tr>
                        <tr>
                          <td>	8	</td>
                          <td>	y	</td>
                          <td>	-JN	</td>
                        </tr>
                        <tr>
                          <td>	9	</td>
                          <td>	nh	</td>
                          <td>	-K	</td>
                        </tr>
                        <tr>
                          <td>	10	</td>
                          <td>	m	</td>
                          <td>	-T	</td>
                        </tr>
                        <tr>
                          <td>	11	</td>
                          <td>	n	</td>
                          <td>	-N	</td>
                        </tr>
                        <tr>
                          <td>	12	</td>
                          <td>	o	</td>
                          <td>	-JK	</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
