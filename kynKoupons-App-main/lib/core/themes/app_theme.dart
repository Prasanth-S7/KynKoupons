import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../constants/app_colors.dart';

class AppTheme {
  static ThemeData lightTheme = ThemeData(
    brightness: Brightness.light,
    primaryColor: AppColors.primaryLight,
    scaffoldBackgroundColor: AppColors.primaryLight,
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.primaryLight,
      elevation: 0,
      iconTheme: IconThemeData(color: AppColors.accentLight),
      titleTextStyle: GoogleFonts.manrope(
        color: AppColors.accentLight,
        fontSize: 20,
        fontWeight: FontWeight.w800,
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.accentLight,
        foregroundColor: AppColors.primaryLight,
        elevation: 0,
        padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
    ),
    textTheme: GoogleFonts.manropeTextTheme(
      ThemeData.light().textTheme,
    ).apply(
      bodyColor: AppColors.accentLight,
      displayColor: AppColors.accentLight,
    ),
  );

  static ThemeData darkTheme = ThemeData(
    brightness: Brightness.dark,
    primaryColor: AppColors.primaryDark,
    scaffoldBackgroundColor: AppColors.primaryDark,
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.primaryDark,
      elevation: 0,
      iconTheme: IconThemeData(color: AppColors.accentDark),
      titleTextStyle: GoogleFonts.manrope(
        color: AppColors.accentDark,
        fontSize: 20,
        fontWeight: FontWeight.w500,
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        backgroundColor: AppColors.accentDark,
        foregroundColor: AppColors.primaryDark,
        elevation: 0,
        padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
      ),
    ),
    textTheme: GoogleFonts.manropeTextTheme(
      ThemeData.dark().textTheme,
    ).apply(
      bodyColor: AppColors.accentDark,
      displayColor: AppColors.accentDark,
    ),
  );
}
