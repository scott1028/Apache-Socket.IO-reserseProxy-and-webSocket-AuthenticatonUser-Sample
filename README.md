1.利用 apache_reverse_proxy_socket.io_conf/socket.io.conf 來配置增加 Apache ReverseProxy Site.

2.Apache Mod 需要啟動
	# rewriteRule
	LoadModule rewrite_module libexec/apache2/mod_rewrite.so
	
	# proxyModule
	LoadModule proxy_module libexec/apache2/mod_proxy.so
	
	# proxy-HTTP
	LoadModule proxy_http_module libexec/apache2/mod_proxy_http.so
	
	# proxy-WebSocket
	LoadModule proxy_wstunnel_module libexec/apache2/mod_proxy_wstunnel.so

3.啟動 Socket.IO Server
	node server.js
