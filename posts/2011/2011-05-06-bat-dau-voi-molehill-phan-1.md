---
title: Bắt đầu với Molehill - Phần 1
date: '2011-05-06T11:02:00.001+07:00'
author: Thanh Tran
tags: [tutorial, 3d, flash, molehill]
modified_time: '2011-05-15T17:46:10.906+07:00'
thumbnail: https://lh3.googleusercontent.com/LQnSKUDCgdFvxt3iV7l2EzThIBd-KaPfahkZL_8SxcZzCc7D0cAeXDBf1DY-zOVnglT7uIce-UlHgEDsgFEzPrRCGuUQhAUk0rE7jVdJTF2cGiYt1J4=s72-c
blogger_id: tag:blogger.com,1999:blog-5363322361445724369.post-3663255042973093925
blogger_orig_url: http://blog.int3ractive.com/2011/05/bat-au-voi-molehill-phan-1.html
---

\[This tutorial discusses How to get started with Molehill API via Away3D. You can find English equivalents from other sources easily\]

## PHẦN 1. TIẾP CẬN MOLEHILL THÔNG QUA FLASH ENGINE AWAY3D


Trình độ: Trung Cấp |  Phần mềm | File mẫu
---|---|---
\- ActionScript 3<br>\- Biết FlashDevelop<br>\- Từng sử dụng Flash 3D engine | \- Flash Develop 4 ([tải về](http://www.flashdevelop.org/community/viewtopic.php?f=9&t=3529))<br>\- Flex SDK 4.5 r.19786 ([tải về](http://opensource.adobe.com/wiki/display%20/flexsdk/Download+Flex+Hero)) | [molehill\_getting\_start\_p1.zip](http://code.google.com/p/thanhtran-sources/downloads/detail?name=molehill_getting_start_p1.zip&can=2&q=)



### I. Molehill và những câu hỏi thường gặp.



#### 1\. Molehill là gì?

Molehill là tên mã của một tập lệnh (API) cấp thấp trong Flash Player cho phép tận dụng sức mạnh của chip đồ họa (GPU) để hiển thị hình ảnh 3D phức tạp và các hiệu ứng đồ họa đòi hỏi tốc độ xử lý cực nhanh, từ đó mang lại cho người dụng trải nghiệm 3D ấn tượng trên hầu hết các máy tính và thiết bị kết nối internet.

Dự kiến Molehill sẽ được phát hành chính thức trong Flash Player 11 và Adobe AIR phiên bản tiếp theo.

![](https://lh3.googleusercontent.com/LQnSKUDCgdFvxt3iV7l2EzThIBd-KaPfahkZL_8SxcZzCc7D0cAeXDBf1DY-zOVnglT7uIce-UlHgEDsgFEzPrRCGuUQhAUk0rE7jVdJTF2cGiYt1J4)_Ảnh: Ứng dụng demo Max Racer viết bằng engine Alternativa 3D hỗ trợ Molehill._

[Xem demo](http://alternativaplatform.com/en/demos/maxracer/).

#### 2\. Những yêu cầu để Flash Player hoạt động với 3D:

3D APIs của Flash Player đòi hỏi DirectX 9 trên Windows và OpenGL 1.3 trên MAC và Linux. Trên nền tảng di động, 3D API dựa trên OpenGL ES 2.0. Với những card đồ họa không được hỗ trợ, Flash Player sẽ thay thế bằng nền tảng software (cũng khá nhanh) tên là SwiftShader, một công nghệ của TransGaming.

#### 3\. Điều này có nghĩa 3D API được giới thiệu trong Flash Player 10 sẽ ngưng hỗ trợ?

Không, 3D APIs giới thiệu trong Flash Player 10 tiếp tục được cung cấp cho người thiết kế và lập trình viên như là một phương thức hiển thị hiệu ứng 3D đơn giản trên nội dung 2D. Còn tập lệnh 3D cấp thấp mới hướng đến những lập trình viên chuyên sâu giúp xây dựng những trải nghiệm đồ họa 3D phức tạp tăng tốc bằng phần cứng. Việc lựa chọn API nào sẽ phụ thuộc vào từng trường hợp cụ thể và loại nội dung được tạo.

#### 4\. 3D Molehill có được hỗ trợ bởi phiên bản Flash Player cho di động? Nếu có thì khi nào?

Có, 3D APIs sẽ có mặt trên các nền tảng di động chẳng hạn như Android hoặc điện thoại sử dụng Linux. Adobe đang làm việc với các đối tác trong dự án Open Screen Project để triển khai 3D trên các thiết bị chạy Flash Player và AIR.

#### 5\. Lập trình viên sẽ viết ứng dụng 3D với Molehill như thế nào?

3D API của Molehill là một tập lệnh cấp thấp nên rất khó sử dụng. Tuy nhiên đã có các ActionScript 3D framework giúp lập trình viên tiếp cận Molehill ở cấp cao và dễ dàng hơn. Sử dụng 3D framework là cách dễ nhất để lập trình viên hiện thực dự án sử dụng Molehill. Các 3D framework hứa hẹn sẽ hỗ trợ Molehill bao gồm: Alternativa3D, Away3d, CopperCube, Flare3D, Minko, Sophie3D or Yogurt3D...

Xem thêm các câu hỏi thường gặp và phần giới thiệu về Molehill tại đây: [http://labs.adobe.com/technologies/flashplatformruntimes/incubator/features/molehill.html](http://labs.adobe.com/technologies/flashplatformruntimes/incubator/features/molehill.html)

### II. Ứng dụng 3D Molehill đầu tiên với Away3D

#### 1\. Chuẩn bị môi trường làm việc với 3D Molehill:

Vì 3D Molehill mới trong gian đoạn beta và còn rất mới, để biên dịch được ứng dụng sử dụng 3D API bạn cần làm một số bước chuẩn bị.

Sau đây là hướng dẫn chuẩn bị môi trường phát triển Molehill bằng FlashDevelop và FlexSDK đơn giản nhất theo ý kiến của tôi:

1.  Tải về và cài đặt FlashDevelop 4 (tại thời điểm viết bài chỉ mới có bản beta) [tại đây](http://www.flashdevelop.org/community/viewtopic.php?f=9&t=3529). Với bản FlashDevelop beta, bạn nên cài dạng stand-alone. Trong lúc cài nhớ bỏ chọn tải về Flex SDK và AIR SDK. Chúng ta sẽ tải về bản Flex SDK beta mới nhất.
2.  Tải về và giản nén bản FlexSDK 4.5 revision 19786 trở lên [tại đây](http://opensource.adobe.com/wiki/display%20/flexsdk/Download+Flex+Hero). (Giả sử bạn giải nén tại C:\\flex\_sdk\_4.5.0.19786)
3.  Tải về thư viện flashplayer\_inc\_playerglobal\_022711.swc hỗ trợ Molehill API [tại đây](http://download.macromedia.com/pub/labs/flashplatformruntimes/incubator/flashplayer_inc_playerglobal_022711.swc).
4.  Tạo thư mục 11.0 bên trong Flex SDK theo đường dẫn: “flex\_sdk\_4.5.0.19786\\frameworks\\libs\\player\\11.0”.
	Sau đó chép file SWC vừa tải ở trên vào và đổi tên thành playerglobal.swc
5.  Chạy FD4, vào Tools > Program Settings... > chọn AS3 Context > nhấn nút \[...\] tại mục Installed Flex SDKs > Add > Nhấn vào nút \[...\] tại mục Path của Flex SDK vừa thêm > tìm đến thư mục Flex SDK vừa tải về (C:\\flex\_sdk\_4.5.0.19786) > OK > Close![](https://lh5.googleusercontent.com/kn6GuGF5VOTl7-z8HLTposfuhb91vsY1vUkeehs9gs5hk_OG_jHFoADWCptxiP4w0s5bhRfK75FPD7s5ns0jup0NiCg0LmLxmiSdApGZTHKC6xrrhHI)
6.  Tạo một dự án mới với template Actionscript 3 - AS3 Project.
7.  Vào project settings:

1.  Tại Output > Platform > chọn Flash Player - 11.0.
2.  Tại Compiler Options > Additional Compiler Options > thêm dòng: -swf-version=13

9.  Chúng ta chỉ build mà không chạy ứng dụng trực tiếp trong FlashDevelop do chưa có Flash Player standalone hỗ trợ Molehill. Để chạy được flash Molehill, bạn cần tải về Flash Player 11 incubator chạy trên browser [tại đây](http://labs.adobe.com/downloads/flashplatformruntimes_incubator.html).

Xem thêm bài viết sau để biết cách build Molehill bằng Flex SDK thuần túy hoặc Flash CS5:
[http://labs.adobe.com/wiki/index.php/Flash\_Player\_Incubator#Authoring\_for\_Flash\_Player\_11.2C0.2C0.2C58\_Incubator](http://labs.adobe.com/wiki/index.php/Flash_Player_Incubator#Authoring_for_Flash_Player_11.2C0.2C0.2C58_Incubator)

#### 2\. Viết ứng dụng Molehill đầu tiên với Away3D:

1.  Tải về Away3D phiên bản hỗ trợ Molehill (4.0) [tại đây](http://away3d.com/downloads).
2.  Giải nén và chép nội dung của thư mục src (thư mục away3d và com) vào thư mục lib của dự án FlashDevelop vừa tạo ở trên.
3.  Vào project settings, thêm thư mục lib vào danh sách Classpaths.
4.  Tạo một lớp mới tên AwayMolehillDemo.as và nhập nội dung của lớp như sau:

```actionscript
package  {
	import away3d.containers.Scene3D;
	import away3d.containers.View3D;
	import away3d.entities.Sprite3D;
	import away3d.lights.PointLight;
	import away3d.materials.ColorMaterial;
	import away3d.primitives.Cube;
	import flash.display.Sprite;
	import flash.events.Event;

	/**
			 - ...
			 - @author Thanh Tran
	 */
	[SWF(width="800",height="600",frameRate="60")]
	public class AwayMolehillDemo extends Sprite {
		public var light1: PointLight;
		public var light2: PointLight;
		public var view3D: View3D;
		public var cube: Cube;

		public function AwayMolehillDemo() {
			super();
			init();
		}

		private function init():void {
			view3D = new View3D();
			//IMPORTANT
			view3D.width = 800;
			view3D.height = 600;
			addChild(view3D);

			var mat: ColorMaterial = new ColorMaterial(0x0000FF, 0.7);
			cube = new Cube(mat, 100, 100, 100, 2, 2, 2);

			light1 = new PointLight();
			light1.x = -1000;
			light1.y = 1000;
			light1.z = -1000;
			light1.color = 0xffFFFF;

			light2 = new PointLight();
			light2.x = 1000;
			light2.y = -1000;
			light2.z = 1000;
			light2.color = 0xffFFFF;

			mat.lights = [light1, light2];

			view3D.scene.addChild(light1);
			view3D.scene.addChild(light2);
			view3D.scene.addChild(cube);

			addEventListener(Event.ENTER_FRAME, enterFrameHandler);
		}

		private function enterFrameHandler(e:Event):void {
			cube.rotationY += 1;
			cube.rotationX += 1;
			view3D.render();
		}
	}
}
```


5.  Click chuột phải lên AwayMolehillDemo.as trên cửa sổ Project Manager, chọn Document Class
6.  Nhấn F8 hoặc Project > Build Project để biên dịch ứng dụng.
7.  Mở file index.html bằng browser đã cài Flash Player Incubator.![](https://lh4.googleusercontent.com/k3WsIDA-bQtpJ18gqgTe-9ZHDKV9K_tUqk9EBmEntpzS_uMTiqSZxsQTCjJ6M3_i1RMTIQMm3Mb_9nTU4MN71aOLumFovBFhrOdvU0x1ahtuCJMmAUU)

Bài viết này chúng ta dùng Flash engine để tạo hiệu ứng 3D Molehill nhanh chóng. Đây cũng là cách mà hầu hết lập trình viên sẽ tiếp cận khi làm việc trong dự án. Trong bài viết tiếp theo chúng ta sẽ xem xét Molehill 3D API ở cấp thấp để hiểu hơn bản chất và cách thức hoạt động của nó.
