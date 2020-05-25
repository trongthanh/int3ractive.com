---
layout: post
title: Bắt đầu với Molehill (Stage3D) - Phần 2
date: '2011-05-15T20:15:00.004+07:00'
author: Thanh Tran
tags:
- Tutorial
- Flash 3D
- Flash
modified_time: '2011-05-15T23:01:23.199+07:00'
thumbnail: https://lh6.googleusercontent.com/w_7lTWqtB7I26bDvcJT1Mc32UgZWDtLkdB3IkYwhjfbNdNfEwa_11njE9cJSr2CtlugalajRkl5oUqUaYShLOgPqq9K0EQuKXzEcuutsueG5NLkU2Ig=s72-c
blogger_id: tag:blogger.com,1999:blog-5363322361445724369.post-8852363903243147177
blogger_orig_url: http://blog.int3ractive.com/2011/05/bat-au-voi-molehill-stage3d-phan-2.html
---

\[This is a translation and edit of the article “[Molehill Getting Started](http://labs.jam3.ca/2011/03/molehill-getting-started/)” from labs.jam3.ca\]

## PHẦN 2. TÌM HIỂU MOLEHILL (STAGE3D) API

Trình độ: Cao Cấp | Phần mềm | File mẫu
---|---|---
\- Vững ActionScript 3<br>\- Biết FlashDevelop<br>\- Biết Flash 3D hoặc 3D Engine | \- Flash Develop 4 ([tải về](http://www.flashdevelop.org/community/viewtopic.php?f=9&t=3529))<br>\- Flex SDK 4.5 r.19786 ([tải về](http://opensource.adobe.com/wiki/display%20/flexsdk/Download+Flex+Hero)) | [molehill\_getting\_start\_p2.zip](http://code.google.com/p/thanhtran-sources/downloads/detail?name=molehill_getting_start_p2.zip&can=2&q=)


> (TTT) Đây là bài viết giới thiệu về Molehill (Stage3D) API ở khía cạnh cơ bản của nó. Molehill API là một tập lệnh cấp thấp nên đòi hỏi bạn phải vững về ActionScript 3 và có chút kinh nghiệm về 3D (Flash) để có thể dễ dàng tiếp cận hơn.

(Dịch) Trước khi chúng ta bắt đầu, có một số thuật ngữ các bạn nên biết:

### Các thuật ngữ:

*   Vertex: Một điểm trong không gian 3D. Một vertex sẽ xác định đỉnh của một tam giác. Tuy nhiên trong MoleHill, vertex định nghĩa cả vị trí và màu của đỉnh.
*   Matrix: Bạn dùng Matrix (ma trận) để biến đổi các Vertex. Hãy hình dung Matrix giống như là các "phương trình" để xoay, thay đổi tỉ lệ hoặc thay đổi vị trí của Vertex.
*   Shader: Shader là một chương trình nhỏ dùng để xử lý Vertex. Shader có thể dùng Matrix để làm các phép biến đổi lên Vertex. (Hay nói cách khác, chương trình thực thi một phương trình lên tất cả các điểm trong 3D). Không như tôi nghĩ, Shader trong MoleHill không chỉ xử lý hoa văn và giao diện mà nó còn dùng để xử lý vị trí của các đối tượng.

Bây giờ chúng ta có thể bắt đầu xem xét các thành phần tạo nên MoleHill


### Các thành phần tạo nên MoleHill:

#### [Stage3D](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display/Stage3D.html)

Stage3D là phần đứng giữa Flash và bộ máy xử lý đồ họa (GPU). Stage3D không nằm trong display list (bạn không thể làm thao tác addChild với Stage3D). Stage3D tồn tại song song với đối tượng Stage chúng ta đã biết. Stage3D nằm đằng sau tất cả các đối tượng hiển thị của Flash nhưng nằm đằng trước StageVideo.


![](https://lh6.googleusercontent.com/w_7lTWqtB7I26bDvcJT1Mc32UgZWDtLkdB3IkYwhjfbNdNfEwa_11njE9cJSr2CtlugalajRkl5oUqUaYShLOgPqq9K0EQuKXzEcuutsueG5NLkU2Ig)

Minh họa Stage3D (nguồn: [ByteArray](http://www.bytearray.org/?p=2555))



#### [Context3D](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display3D/Context3D.html)

Stage3D sẽ chứa Context3D. Để dễ hình dung, bạn hãy liên tưởng tới việc Bitmap chứa BitmapData. Bạn không vẽ trực tiếp lên Bitmap cũng như bạn sẽ không render đối tượng trực tiếp lên Stage3D. Việc bạn làm với Context3D sẽ tương tự như với BitmapData.

#### [VertextBuffer3D](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display3D/VertexBuffer3D.html)

Context3D sẽ chứa các đối tượng VertextBuffer3D. Hãy hình dung VertextBuffer3D như là các “chỉ dẫn” cần phải vẽ những gì và chúng trông như thế nào. VertextBuffer3D gồm một Vector. (mảng các giá trị kiểu Number) mà nó sẽ định nghĩa vị trí và màu sắc của vertex. (xem thêm bên dưới)

#### [IndexBuffer3D](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display3D/IndexBuffer3D.html)

IndexBuffer3D chứa một Vector giống VertexBuffer3D. Nhưng thay vì là một Vector., IndexBuffer3D là một Vector. (các phần tử của Vector có kiểu uint). Hãy hình dung như vầy: VertexBuffer3D sẽ chứa một tập các tọa độ còn IndexBuffer3D sẽ quyết định thứ tự được vẽ của các tọa độ đó. Nếu so sánh chúng với thế giới thực, VertexBuffer3D xác định các thành phố trên bản đồ còn IndexBuffer3D sẽ xác định thứ tự để đến các thành phố đó.

#### [Program3D](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display3D/Program3D.html)

Program3D là một “chương trình” mà nó sẽ duyệt qua dữ liệu của VertextBuffer3D và “biến đổi” chúng. Program3D chứa 2 Shader mà một sẽ biến đổi vị trí của từng vertex và một sẽ định nghĩa các pixel trong một tam giác sẽ trông như thế nào. 2 chương trình nhỏ đó được gọi là VertexShader và FragmentShader

#### [VertexShader](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display3D/Program3D.html#upload%28%29)

VertexShader là một chương trình nhỏ viết bằng ngôn ngữ AGAL mà nó sẽ biến đổi vị trí các Vertex (đỉnh) của tam giác. Chẳng hạn, nếu bạn muốn co giãn, xoay, hoặc di chuyển một tam giác, bạn sẽ dùng VertexShader để làm việc này.

#### [FragmentShader](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display3D/Program3D.html#upload%28%29)

FragmentShader là một chương trình khác viết bằng AGAL mà nó sẽ xử lý các pixel bên trong tác giác. Chẳng hạn, nếu bạn muốn đổi màu tam giác thành màu đỏ thì bạn cần viết một chương trình FragmentShader để làm việc đó.

![](https://lh6.googleusercontent.com/t0Sc8RdDGijRU4Pk3mI76bvOjRxM0YIvzU2Zm-g_HRjlwFrrOFL3s-rtmltVUtFl4HsU9pExFCOaSZCRNAGjxqFEcpIwJHQnDtNPRVKDM5XRFuj8sIM)

Hình minh họa về Vertex & Fragment program (nguồn [ByteArray](http://www.bytearray.org/?p=2555))

#### [AGAL](http://labs.jam3.ca/asdocs/incubatorAsDoc/flash/display3D/Program3D.html#upload%28%29)

AGAL (Adobe Graphics Assembly Language) là một ngôn ngữ lập trình cấp thấp. Nó được dùng để viết các chương trình VertexShader và FragmentShader. Nó là trái tim của MoleHill.

Sơ đồ bên dưới mô tả sự liên hệ giữa các thành phần![](https://lh3.googleusercontent.com/bPlU0WN5OmVZGMkg4XOMAcmucUWghcDIXOBf9S4sf2qOOVOry4yNWa0_VuoToriw1kyIsTPShsA8gbye6KQsNIWL9unxC3LZiTHP5tkU7i443n5GQg)

### Ứng dụng MoleHill thường có 2 phần:

1.  Cài đặt
2.  Render (tạm dịch: xử lý hiển thị)

#### 1\. Những việc chúng ta cần làm trong giai đoạn Cài đặt

1.  Truy xuất đối tượng Context3D từ Stage3D.
2.  Cài đặt Context3D
3.  Tạo một VertextBuffer
4.  Tạo một IndexBuffer
5.  Gửi dữ liệu Vertex cho VertexBuffer
6.  Gửi dữ liệu Index cho IndexBuffer
7.  Biên dịch VertexShader
8.  Biên dịch FragmentShader
9.  Tạo một Program3D để sử dụng 2 shader vừa tạo
10.  Lắng nghe sự kiện ENTER\_FRAME để liên lục gửi dữ liệu đến GPU.


Bạn có thể thấy có khá nhiều việc phải làm trong bước cài đặt. Việc cài đặt, theo tôi, phức tạp hơn nhiều so với việc render.

#### 2\. Những việc cần làm trong quá trình Render (ENTER\_FRAME):

1.  Dọn sạch Context3D
2.  Cài đặt chương trình Program3D sẽ dùng
3.  Gửi VertextBuffer đến Context3D
4.  Cài đặt dữ liệu cho các shader (khai báo các biến AGAL)
5.  Vẽ các tam giác
6.  Hiển thị ra màn hình các tam giác được vẽ

### Mã nguồn ví dụ

Bây giờ chúng ta sẽ xem qua mã nguồn ví dụ
Phần cài đặt mô tả ở trên được hiện thực trong hàm onGotContext. Bởi vì để lấy được Context3D, chúng ta phải gửi yêu cầu cho Flash và chờ cho đến khi nó được trả về.
Phần render xảy ra trong hàm onRenderLoop xử lý sự kiện ENTER\_FRAME.
Tôi đã cố gắng viết thật nhiều dòng ghi chú trong code để bạn có thể dễ nắm bắt. Cũng cần nói thêm là mã nguồn ví dụ này được dựa trên [bài blog](http://www.bytearray.org/?p=2555) của Thibault Imbert và [video này](http://2010.max.adobe.com/online/2010/MAX175_1288221804987EOHN).

```actionscript
package {
	import com.adobe.utils.AGALMiniAssembler;
	import flash.display.Sprite;
	import flash.display.Stage3D;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.display3D.Context3D;
	import flash.display3D.Context3DProgramType;
	import flash.display3D.Context3DTriangleFace;
	import flash.display3D.Context3DVertexBufferFormat;
	import flash.display3D.IndexBuffer3D;
	import flash.display3D.Program3D;
	import flash.display3D.VertexBuffer3D;
	import flash.events.Event;
	import flash.geom.Matrix3D;
	import flash.geom.Rectangle;
	/**
	 *
	 */
	[SWF(width="980",height="570",frameRate="60")]
	public class MolehillDemo extends Sprite {
		//Context3D là nơi xử lý hiển thị xảy ra
		//Nó giống như BitmapData đối với Bitmap (Stage3D)
		private var context3d:Context3D;
		//Đây là đối tượng sẽ lưu dữ liệu của vertex
		private var vertexBuffer:VertexBuffer3D;
		//Đối tượng này sẽ xác định thứ tự vẽ của các đỉnh vertex
		private var indexBuffer:IndexBuffer3D;
		//Chương trình này sẽ chứa 2 shader dùng để xử lý các vertex
		private var program:Program3D;
		//Đây là Ma Trận sẽ được sử dụng bởi VertexShader để xử lý vị trí của các vertex
		//(đừng lo, bạn sẽ hiểu nó khi đọc xong bên dưới)
		private var model:Matrix3D = new Matrix3D();


		public function MolehillDemo() {
			trace("start app");
			//Các lệnh thông thường của Flash để điều chỉnh nội dung Flash không thay đổi tỉ lệ
			//và luôn canh lề ở góc trên bên trái
			stage.scaleMode = StageScaleMode.NO_SCALE;
			stage.align = StageAlign.TOP_LEFT;

			//Lắng nghe sự kiện khi Flash sẵn sàng trả vể đối tượng Context3D.
			//Đối tượng Context3D có thể không truy xuất được ngay tức thời nên chúng ta
			//cần phải lắng nghe sự kiện này.
			stage.stage3Ds[0].addEventListener(Event.CONTEXT3D_CREATE, onGotContext);

			//Yêu cầu Flash trả về tham chiếu đến Context3D, Flash sẽ đáp trả trong hàm onGotContext
			stage.stage3Ds[0].requestContext3D();

			//Tại đây chúng ta đề nghị Flash hiển thị các hình ảnh 3D trong một khung hình
			//chữ nhật rộng 980px, cao 570px bắt đầu từ tọa độ 0,0
			stage.stage3Ds[0].viewPort = new Rectangle(0, 0, 980, 570);
		}

		protected function onGotContext(e:Event):void {
			trace("got context");
			//Nhận được đối tượng Stage3D mà qua đó sẽ lấy được Context3D
			var stage3d:Stage3D = Stage3D(e.currentTarget);

			//cuối cùng cũng lấy được Context3D – Yeah!
			context3d = stage3d.context3D;
			trace("context 3D: " + context3d);
			//Khoan đã! Đến đây cũng chưa chắc bạn đã thật sự lấy được Context3D. Câu lệnh
			//bên dưới là cách chuẩn để kiểm tra lần cuối bạn có thật sự nhận được Context3D.
			//Trong ví dụ này, nếu điều kiện là true, chúng ta sẽ thoát khỏi hàm và không
			//làm gì cả.
			if (context3d == null)
				return;
			//Dòng dưới giúp chúng ta nhận được các thông báo lỗi nếu chương trình chạy có vấn đề.
			//Khi xuất bản ứng dụng, chúng ta nên cài về false. (Việc này cũng sẽ giúp cải thiện tốc độ).
			context3d.enableErrorChecking = true;

			//Thao tác này tương tự việc khởi tạo BitmapData(980, 570). Chúng ta đang khai báo
			//vùng dữ liệu mà chúng ta cần để xử lý. Số 4 là mức độ khử răng cưa.
			//Theo tài liệu, các giá trị cho phép của tham số này là:
			//0 không khử răng cưa
			//2 khử răng cưa ít
			//4 khử răng cưa chất lượng cao
			//16 khử răng cưa chất lượng rất cao
			//nhưng khi tôi thử đặt 16, chương trình bị lỗi nên có thể 16 hiện tại chưa hoạt động.
			context3d.configureBackBuffer(980, 570, 4, true);

			//Ở đây đơn giản chúng ta đang cài đặt nếu một tam giác không quay về phía người
			//xem thì không vẽ nó ra (culling: lược bớt)
			//context3d.setCulling(Context3DTriangleFace.BACK);
			context3d.setCulling(Context3DTriangleFace.BACK);

			//Tạo một vertex buffer
			//Chúng ta sẽ có 3 vertex và sẽ có 6 giá trị cho mỗi vertex: x, y, z, r, g, b
			vertexBuffer = context3d.createVertexBuffer(3, 6);

			//Tạo một buffer chỉ mục (index) cho các vertex
			//Chúng ta sẽ vẽ một tam giác, vì vậy sẽ có 3 đỉnh (vertex) và 3 chỉ mục (index)
			indexBuffer = context3d.createIndexBuffer(3);

			//Tiếp theo chúng ta sẽ tạo ra mảng dữ liệu cho các vertex. Mảng dữ liệu vertex này
			//sẽ chứa thông tin tọa độ và màu sắc của từng vertex.
			//Sau đây là giải thích cho mảng dữ liệu bên dưới:
			//Vùng thông tin cho mỗi vertex bao gồm tọa độ sau đó là màu sắc.
			//x==-1 là vị trí trái cùng của màn hình
			//x==1 là vị trí phải cùng của màn hình
			//x==0 là vị trí giữa màn hình (theo chiều ngang)
			//Tương tự theo chiều dọc cho Y
			//Màu sắc cũng được biểu diễn bằng số phân số cho nên:
			//1, 0, 0 <- màu đỏ 255 (r, g, b)
			//0.5, 0, 0 <- nửa màu đỏ 128

			//Mảng sau đây sẽ định nghĩa một tam giác có góc trái dưới màu đỏ, góc giữa trên
			//màu xanh lá và góc phải dưới màu xanh dương
			var vertexData:Vector. = Vector.(
				[-1, -1, 0, 255 / 255, 0, 0, //<- 1st vertex x,y,z,r,g,b
				0, 1, 0, 0, 255 / 255, 0, //<- 2nd vertex x,y,z,r,g,b
				1, -1, 0, 0, 0, 255 / 255 //<- 3rd vertex x,y,z,r,g,b
				]);

			//Sau đây là thứ tự các chỉ mục mà các đỉnh sẽ được vẽ
			//0==đỉnh thứ nhất
			//1==đỉnh thứ hai
			//2==đỉnh thứ ba
			var indexData:Vector. = Vector.([0, 1, 2]);

			//Gửi thông tin của các vertex cho vertex buffer
			vertexBuffer.uploadFromVector(vertexData, 0, 3);

			//Gửi dữ liệu chỉ mục cho index buffer
			indexBuffer.uploadFromVector(indexData, 0, 3);

			//Chúng ta sẽ cần 1 “bộ biên dịch” AGAL cho vertex shader và 1 cho fragment shader
			var agalVertex:AGALMiniAssembler = new AGALMiniAssembler();
			var agalFragment:AGALMiniAssembler = new AGALMiniAssembler();

			//Bây giờ hãy cùng viết vài dòng AGAL
			//AGAL là ngôn ngữ rất cơ bản
			//Nó bao gồm các câu lệnh (statements)
			//Mỗi câu lệnh có ít nhất các thành phần sau
			//Operation OutPut, Input1 (Hành-động Dữ-liệu-ra, Dữ-liệu-vào-1)
			//Đôi khi nó có thể có 2 tham số truyền vào
			//Operation OutPut, Input1, Input2

			//Để xem AGAL hoạt động như thế nào, hãy giả sử chúng ta cần làm một phép tính:
			//I*J=K
			//câu lệnh AGAL sẽ như sau:
			//mul K, I, J

			//mul==Operation
			//K==Output
			//I==Input1
			//J==Input2

			//Sau đây là định nghĩa của một số biến và lệnh được thấy ở dưới
			//m44: lệnh để thực thi một ma trận (Matrix) lên dữ liệu
			//op: dữ liệu ra là vị trí của vertex trên màn hình
			//va0: x, y, z của một vertex trogn tam giác của chúng ta
			//vc0: một hằng sẽ được định nghĩa sau (trong trường hợp của chúng ta chính là
			//ma trận để chuyển đổi các vertx)
			//v0: một “biến” ở giữa vertex shader và fragment shader
			//va1: r, g, b của một vertex

			//Mô tả của các dòng lệnh tiếp theo như sau:
			//m44 op, va0, vc0 -> thực thi một ma trận 4x4 lên vertex và trả về giá trị của nó trên màn hình
			//mov v0, va1 → lấy giá tri màu của vertex này và gửi nó cho fragment shader
			var agalVertexSource:String = "m44 op, va0, vc0\n" + "mov v0, va1\n";

			//oc: dữ liệu ra là màu hiển thị trên màn hình
			//v0: biến trung gian giữa vertex shader và fragment shader
			//mov oc, v0 -> lấy giá trị màu (biến trung gian đã được lưu từ vertex shader) và xuất ra màn hình
			var agalFragmentSource:String = "mov oc, v0\n";

			//Biên dịch source AGAL vừa viết thành một mảng ByteArray mà các shader có thể dùng.
			agalVertex.assemble(Context3DProgramType.VERTEX, agalVertexSource);
			agalFragment.assemble(Context3DProgramType.FRAGMENT, agalFragmentSource);

			//Tạo một chương trình (program) để thực thi các shader
			//Nên nhớ là chương trình này sẽ chứa một Vertex Shader và một Fragment Shader
			program = context3d.createProgram();

			//Gửi các shader đã được biên dịch đến program để thực thi
			//agalCode==bytearray
			program.upload(agalVertex.agalcode, agalFragment.agalcode);

			//Thêm hàm xử lý render liên tục
			addEventListener(Event.ENTER_FRAME, onRenderLoop);

		}

		protected function onRenderLoop(event:Event):void {

			//Xóa khung hình và màn hình
			context3d.clear(0.5, 0.5, 0.5, 1);

			//cài đặt chương trình dùng để render
			context3d.setProgram(program);

			//Có thể bạn sẽ thấy lạ vì 2 dòng bên dưới gần giống như nhau.
			//Về cơ bản, đoạn code bên dưới sẽ cho AGAL biết va0 sẽ là x, y, z và va1 sẽ là r, g, b
			//Dòng thứ 1
			//0: chỉ mục của biến đầu tiên, va0
			//vertexBuffer: vertex buffer mà chúng ta sẽ dùng
			//0: chỉ mục nơi bắt đầu lấy giá trị cho va0 (0 bởi vì x, y, z bắt đầu tại 0)
			//Context3DVertexBufferFormat.FLOAT_3: sẽ có 3 giá trị liên tiếp để lấy: x, y, z
			//Dòng thứ 2
			//1: chỉ mục của biến va1
			//vertexBuffer: vertex buffer mà chúng ta sẽ dùng
			//3: chỉ mục nơi bắt đầu lấy giá trị cho va1 (r, g, b bắt đầu tại chỉ mục 3)
			//Context3DVertexBufferFormat.FLOAT_3: 3 giá trị liên tiếp để lấy: r, g, b
			//Theo tôi bạn có thể dùng Context3DVertexBufferFormat.FLOAT_4 nếu bạn cần sử dụng r, g, b, a
			context3d.setVertexBufferAt(0, vertexBuffer, 0, Context3DVertexBufferFormat.FLOAT_3);
			context3d.setVertexBufferAt(1, vertexBuffer, 3, Context3DVertexBufferFormat.FLOAT_3);

			//Lấy giá trị mặc định của ma trận
			model.identity();

			//Co tỉ lệ của tam giác xuống 0.5 theo x, y, z
			model.appendScale(0.5, 0.5, 0.5);

			//Gán ma trận vừa khai báo vào biến vc0 và nó sẽ được dùng để xử lý dữ liệu vertex của chúng ta
			context3d.setProgramConstantsFromMatrix(Context3DProgramType.VERTEX, 0, model);

			//Vẽ hình tam giác của chúng ta ra màn hình
			//0 là chỉ mục của vị trí (trong vertex buffer) bắt đầu vẽ
			//1 là số tam giác sẽ vẽ
			context3d.drawTriangles(indexBuffer, 0, 1);

			//Hiển thị tam giác tra màn hình
			context3d.present();
		}
	}
}
```


Để biên dịch được đoạn code trên, bạn cũng làm các bước chuẩn bị như ở Phần 1-II-1.
Các bước để biên dịch đoạn code trên như sau:

1.  Vào project settings, thêm thư mục lib vào danh sách Classpaths.
2.  Tải về thư viện AGALMiniAssembler [tại đây](http://www.bytearray.org/wp-content/projects/agalassembler/com.zip) (đây là lớp tiện ích bên ngoài, không có sẵn trong Flash Player Incubator), giải nén vào thư mục lib của dự án. (thư mục ‘com’ ở trong ‘lib’).
		(Nếu bạn dùng lại dự án đã tạo cho phần 1 thì không cần phải làm bước này, AGALMiniAssembler đã được đóng gói sẵn với Away3D)
3.  Tạo một lớp mới tên MolehillDemo.as và nhập nội dung của lớp như ở trên.
4.  Click chuột phải lên MolehillDemo.as trên cửa sổ Project Manager, chọn Document Class
5.  Nhấn F8 hoặc Project > Build Project để biên dịch ứng dụng.
6.  Mở file index.html bằng browser đã cài Flash Player Incubator.

![](https://lh3.googleusercontent.com/JB8RjYicIi3dk27lFpofdyOeat4xQ0JrrPit2GRw3Cl1uLArxo18WsG-EnDO8DhDmthM24ue2fSdYIsLfrhuBwCeCSJdd4dmehtt9_XhzXk7ap4ISx0)


### Xem thêm:

- Bài viết gốc: [http://labs.jam3.ca/2011/03/molehill-getting-started](http://labs.jam3.ca/2011/03/molehill-getting-started)
- Giới thiệu về Flash Player Incubator và cách biên dịch: [http://labs.adobe.com/wiki/index.php/Flash\_Player\_Incubator#Authoring\_for\_Flash\_Player\_11.2C0.2C0.2C58\_Incubator](http://labs.adobe.com/wiki/index.php/Flash_Player_Incubator#Authoring_for_Flash_Player_11.2C0.2C0.2C58_Incubator)
- Đào sâu hơn về Molehill API: [http://www.bytearray.org/?p=2555](http://www.bytearray.org/?p=2555)
