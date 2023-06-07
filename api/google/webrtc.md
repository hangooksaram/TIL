# WebRTC API

- WebRTC 표준은 크게 두 가지 기술, 즉 미디어 캡처 기기와 P2P 연결을 다룹니다.

- 미디어 캡처 기기에는 동영상 카메라와 마이크는 물론 화면 캡처 및 기기도 포함됩니다. 카메라와 마이크의 경우 navigator.mediaDevices.getUserMedia()를 사용하여 MediaStreams를 캡처합니다. 화면 녹화에는 navigator.mediaDevices.getDisplayMedia()를 대신 사용합니다.

- P2P 연결은 RTCPeerConnection 인터페이스에서 처리합니다. 이는 WebRTC에서 두 피어 간의 연결을 설정하고 제어하는 중심점입니다.
