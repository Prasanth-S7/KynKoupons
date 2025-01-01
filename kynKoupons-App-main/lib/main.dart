// lib/main.dart
import 'package:flutter/material.dart';
import 'package:kynkoupons/features/home/providers/post_provider.dart';
import 'package:kynkoupons/features/home/providers/user_provider.dart';
import 'package:kynkoupons/features/home/screens/home_screen.dart';
import 'package:kynkoupons/features/rewards/screens/reward_details.dart';
import 'package:provider/provider.dart';
import 'core/themes/app_theme.dart';
import 'core/themes/theme_provider.dart';
import 'features/rewards/providers/rewards_provider.dart';
import 'features/rewards/screens/rewards_dashboard.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
        ChangeNotifierProvider(create: (_) => RewardsProvider()),
        ChangeNotifierProvider(create: (_) => HomeProvider()),
        ChangeNotifierProvider(create: (_) => PostProvider()),
        ChangeNotifierProvider(create: (_) => SearchProvider()),
        ChangeNotifierProvider(create: (_) => UserProvider()),
      ],
      child: Consumer<ThemeProvider>(
        builder: (context, themeProvider, child) {
          return MaterialApp(
            debugShowCheckedModeBanner: false,
            title: 'Rewards App',
            theme: AppTheme.lightTheme,
            darkTheme: AppTheme.darkTheme,
            themeMode: themeProvider.isDarkMode ? ThemeMode.dark : ThemeMode.light,
            home: HomeScreen(),
          );
        },
      ),
    );
  }
}

// lib/features/rewards/providers/rewards_provider.dart
